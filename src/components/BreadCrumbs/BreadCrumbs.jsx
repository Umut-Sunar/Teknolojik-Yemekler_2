import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';



export default function BasicBreadcrumbs() {
  return (
    <div sx={{color:'white'}} role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="black" href="/Anasayfa">
          Anasayfa
        </Link>

        <Typography sx={{fontWeight:'600'}} color="red">Sipariş Oluştur</Typography>
      </Breadcrumbs>
    </div>
  );
}
