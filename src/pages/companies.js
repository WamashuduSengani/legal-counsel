import React from "react";
import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { useFormik } from 'formik';
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CompaniesSearch } from "src/sections/companies/companies-search";
import * as Yup from 'yup';
import { CompanyCard } from "src/sections/companies/company-card";

const companies = [
  // Your company data...
];

const Page = () => {
  const iframeStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Set the desired height of the container
  };

  return (
    <>
      <Head>
        <title>Companies | Devias Kit</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="xl">
          <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
              <Stack spacing={1}>
                <Typography variant="h4">Legal Help</Typography>
              </Stack>

            </Stack>
            {/* <Typography variant="h4">Example questions: What are the terms and conditions of my employment contract?</Typography> */}

            <Typography>Example questions: If I get a warning can I be fired from that?</Typography>
            <div style={iframeStyle}>
              {/* Other components or content */}
              <iframe
                src="https://legal-counsel-backend-bm94.vercel.app/"
                width="100%"
                height="100%"
                title="Example Iframe"
                style={{ border: 'none' }}
              ></iframe>
              {/* Other components or content */}
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;


// import React from "react";
// import Head from "next/head";
// import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
// import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
// import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
// import {
//   Box,
//   Button,
//   Container,
//   Pagination,
//   Stack,
//   SvgIcon,
//   Typography,
//   TextareaAutosize,
// } from "@mui/material";
// import { useFormik } from 'formik';
// import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
// import { CompaniesSearch } from "src/sections/companies/companies-search";
// import * as Yup from 'yup';
// import { CompanyCard } from "src/sections/companies/company-card";

// const companies = [
//   // Your company data...
// ];

// const Page = () => {
//   const formik = useFormik({
//     initialValues: {
//       question: '',
//     },
//     validationSchema: Yup.object({
//       question: Yup
//         .string()
//         .required('Question is required'),
//     }),
//     onSubmit: async (values, helpers) => {
//       try {
//         await auth.signUp(values.email, values.name, values.password);
//         router.push('/');
//       } catch (err) {
//         helpers.setStatus({ success: false });
//         helpers.setErrors({ submit: err.message });
//         helpers.setSubmitting(false);
//       }
//     }
//   });

//   const iframeStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh', // Set the desired height of the container
//   };
//   return (
//     <>
//       <Head>
//         <title>Companies | Devias Kit</title>
//       </Head>
//       <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
//         {/* <Container maxWidth="xl"> */}
//         {/* <Stack spacing={3}> */}
//         <Stack spacing={3}>
//           <Stack spacing={1}>
//                 <Typography variant="h4">Legal Help</Typography>
//               </Stack>
//           <Stack>
//             {/* <Typography variant="h4"> */}
//               <div style={iframeStyle}>
//                 {/* Other components or content */}
//                 <iframe
//                   src="http://localhost:3001/"
//                   width="100%"
//                   height="500vh"
//                   title="Example Iframe"
//                 ></iframe>
//                 {/* Other components or content */}
//               </div>
//             {/* </Typography> */}
//           </Stack>
//         </Stack>
//         {/* </Stack> */}
//         {/* </Container> */}
//       </Box>
//     </>
//   )
// };


// Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// export default Page;

