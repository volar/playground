function calculateConversionRates(rates, queries) {
    // Build graph
    const graph = {};
    for (const rate of rates) {
        const [from, to, value] = rate;
        if (!graph[from]) {
            graph[from] = {};
        }
        if (!graph[to]) {
            graph[to] = {};
        }
        graph[from][to] = value;
        graph[to][from] = 1/value;
    }
    
    // Perform DFS for each query
    const result = [];
    for (const query of queries) {
        const [from, to] = query;
        const visited = new Set();
        const rate = dfs(graph, from, to, 1.0, visited);
        
        if (rate === -1.0) {
            result.push(rate);
        } else {
            result.push(rate.toFixed(1));
        }
    }
    
    return result;
}

function dfs(graph, curr, target, pathValue, visited) {
    if (curr === target) {
        return pathValue;
    }
    
    visited.add(curr);
    
    for (const neighbor in graph[curr]) {
        if (!visited.has(neighbor)) {
            const edgeValue = graph[curr][neighbor];
            const result = dfs(graph, neighbor, target, pathValue * edgeValue, visited);
            if (result !== -1.0) {
                return result;
            }
        }
    }
    
    return -1.0;
}

const rates = [['USD', 'JPY', 100], ['JPY', 'CHN', 20], ['CHN', 'THAI', 200]];
const queries = [['USD', 'CHN'], ['JPY', 'THAI'], ['USD', 'AUD']];

console.log(calculateConversionRates(rates, queries));