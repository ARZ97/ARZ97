
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PaletteIcon from '@material-ui/icons/Palette';
import MailIcon from '@material-ui/icons/Mail';
import StorageIcon from '@material-ui/icons/Storage';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

  // core components/views for Admin layout
import DashboardPage from "dashboard-views/Dashboard/Dashboard.js";
import Products from "dashboard-views/Products/Products.js";
import Menssages from "dashboard-views/Menssages/Menssages.js";
import Providers from "dashboard-views/Providers/Providers.js";
import PortalConfig from "dashboard-views/PortalConfig/PortalConfig.js";
import Contact from "dashboard-views/Contact/ContactAdmin.js";
import PersonalPage from "dashboard-views/Personal/Personal.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
   {
    path: "/personal",
    name: "Administrar Personal",
     icon: AssignmentIndIcon,
    component: PersonalPage,
    layout: "/admin"
  },
  {
    path: "/product",
    name: "Productos",
     icon: StorageIcon,
    component: Products,
    layout: "/admin"
  },
  {
    path: "/mensasjes",
    name: "Mensajes",
     icon: QuestionAnswerIcon,
    component: Menssages,
    layout: "/admin"
  },
  {
    path: "/Providers",
    name: "Provedores",
     icon: ContactPhoneIcon,
    component: Providers ,
    layout: "/admin"
  },
  {
    path: "/portal",
    name: "Perzonalizar Portal",
     icon: PaletteIcon,
    component: PortalConfig,
    layout: "/admin"
  },
  {
  path: "/Contacto",
  name: "Contacto",
   icon: MailIcon,
  component: Contact,
  layout: "/admin"
  
}
];

export default dashboardRoutes;
       