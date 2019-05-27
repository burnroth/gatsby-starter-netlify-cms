// import { React , Component, useState } from 'react'
// import { StaticQuery, graphql } from "gatsby";
// import TrialModal from "../Modals/TrialModal";

// class TrialModalTranslations extends Component {
//   constructor(props) {
//     super(props);
//     this.useState({
//       translations: this.props.translationsJson
//     })
//   }

// componentDidMount(){
//   const translations = this.props.data.translationsJson
//   this.props.getTranslations(translations)
// }

//   render(){
//     return null
//   }
// }

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