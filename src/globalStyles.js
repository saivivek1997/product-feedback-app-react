import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
   --purple-color:#AD1FEA;
   --royal-blue-color:#4661e6;
   --white-color:#fff;
   --alice-blue-color:#F2F4FF;
   --ghost-white-color:#F7F8FD;
   --american-blue-color:54374;
   --dark-blue-grey-color:#647196;
   --vivid-tangerine-color:#F49F85;
   --maya-blue-color:#62BCFA;
   --deep-indigo-color:rgb(55,63,104);
}
 body{
   font-family: Jost;
   background-color: var(--ghost-white-color);
 }
 ul{
    list-style-type:none;
 }

 a{
    text-decoration: none;
 }
 a:active{
  color:currentColor;
 }

 .row-flex{
  display: flex;
 } 

 .column{
  display: flex;
  flex-direction: column;
 }

 .row-between{
  display: flex;
  justify-content: space-between;
  align-items: center;
 }

 .row-center{
   display: flex;
   justify-content: center;  
   align-items: center;
 }
 .column-center{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }


 //dropdown menu styles
 .ant-dropdown-menu {
  margin-top: 30px !important;
  border-radius: 10px !important;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35) !important;;
  background-color: #fff !important;
  margin-left: 80px!important;
  width: 255px;
  }
  .ant-dropdown-menu-item {
    border-bottom: 1px solid rgba(58,67,116,0.15);
    .sort{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      font-size: 16px;
      color: var(--dark-blue-grey-color);
      &:hover{
        color:var(--purple-color);
        font-weight: 600;
      }
    }
    &:last-child{
       border-bottom:none
      }
  }
  //select styles

  .ant-select-dropdown{
    /* margin-top: 20px;
    display: block; */
  }
  .ant-select-item{
    padding:12px 24px !important;
    cursor: pointer!important;
    font-size: 16px! important;
    color:var(--dark-blue-grey-color)!important;
    border-bottom: 1px solid rgba(58,67,116,0.15);
    &:last-child{
      border: none;
    }
    &:hover{
    color: red;
    }
    .select-label{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .ant-select-selection-item{
    img{
      display: none;
    }
  }
  //toast

.toast-message{
  max-width: 400px;
}
`;

export default GlobalStyles;
