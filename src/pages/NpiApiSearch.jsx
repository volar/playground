import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';
import Navigation from '../components/Navigation';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function NpiApiSearch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        '/api/?number=&enumeration_type=&taxonomy_description=&name_purpose=&first_name=&use_first_name_alias=&last_name=&organization_name=&address_purpose=&city=baltimore&state=&postal_code=&country_code=&limit=&skip=&pretty=&version=2.1'
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const sampleObject = {
    created_epoch: '1177362431000',
    enumeration_type: 'NPI-1',
    last_updated_epoch: '1183948145000',
    number: '1073731121',
    addresses: [
      {
        country_code: 'US',
        country_name: 'United States',
        address_purpose: 'MAILING',
        address_type: 'DOM',
        address_1: '103 E READ ST',
        city: 'BALTIMORE',
        state: 'MD',
        postal_code: '212022403',
        telephone_number: '410-234-0007',
        fax_number: '410-659-1943',
      },
      {
        country_code: 'US',
        country_name: 'United States',
        address_purpose: 'LOCATION',
        address_type: 'DOM',
        address_1: '103 E READ ST',
        city: 'BALTIMORE',
        state: 'MD',
        postal_code: '212022403',
        telephone_number: '410-234-0007',
        fax_number: '410-659-1943',
      },
    ],
    practiceLocations: [],
    basic: {
      first_name: 'STEFFI',
      last_name: '.RESNICK',
      middle_name: 'BETH',
      credential: 'Ph.D.',
      sole_proprietor: 'NO',
      gender: 'F',
      enumeration_date: '2007-04-23',
      last_updated: '2007-07-08',
      status: 'A',
      name_prefix: 'Dr.',
      name_suffix: '--',
    },
    taxonomies: [
      {
        code: '231H00000X',
        taxonomy_group: '',
        desc: 'Audiologist',
        state: 'MD',
        license: '0176',
        primary: false,
      },
      {
        code: '237600000X',
        taxonomy_group: '',
        desc: 'Audiologist-Hearing Aid Fitter',
        state: 'MD',
        license: '0176',
        primary: false,
      },
    ],
    identifiers: [
      {
        code: '01',
        desc: 'Other (non-Medicare)',
        issuer: 'MAMSI',
        identifier: '32448',
        state: 'MD',
      },
      {
        code: '01',
        desc: 'Other (non-Medicare)',
        issuer: 'CIGNA',
        identifier: '428144001',
        state: 'MD',
      },
      {
        code: '01',
        desc: 'Other (non-Medicare)',
        issuer: 'AETNA',
        identifier: '4673985',
        state: 'MD',
      },
      {
        code: '01',
        desc: 'Other (non-Medicare)',
        issuer: 'UNITED HEALTHCARE',
        identifier: '521456813',
        state: 'MD',
      },
      {
        code: '01',
        desc: 'Other (non-Medicare)',
        issuer: 'CAREFIRST BC BS MD',
        identifier: 'H412S',
        state: 'MD',
      },
      {
        code: '01',
        desc: 'Other (non-Medicare)',
        issuer: 'CAREFIRST BC BS NCA',
        identifier: 'J210',
        state: 'MD',
      },
    ],
    endpoints: [],
    other_names: [],
  };

  return (
    <Container>
      <Navigation />
      <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
        Npi search App
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3} key={sampleObject.number}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              {sampleObject.basic.first_name} {sampleObject.basic.last_name}
            </Typography>
            <Typography variant="body2">
              {sampleObject.taxonomies.map((item) => (
                <div key={item.code}>{item.desc}</div>
              ))}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
