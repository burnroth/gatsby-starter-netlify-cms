// import React from 'react'

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query TrialModalQuery {
//         translationsJson {
//           buttons {
//             testForFree
//           }
//           forms {
//             firstName
//             lastName
//             company
//             email
//             phone
//             emailMissing
//             invalidEmail
//             dataTermsMissing
//             orgNoMissing
//             firstNameMissing
//             lastNameMissing
//             companyMissing
//             phoneMissing
//             phoneInvalid
//             licenseCountMissinig
//             licenseCountInvalid
//           }
//         }

//         markdownRemark(frontmatter: { component: { eq: "TrialModal" } }) {
//           frontmatter {
//             component
//             heading
//             description
//           }
//         }
//       }
//     `}
//     render={(data, count) => <TrialModalTranslations data={data} count={count} />}
//   />
// );