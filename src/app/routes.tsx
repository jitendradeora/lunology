import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Shop } from "./components/pages/ShopNew";
import { ProductDetail } from "./components/pages/ProductDetailNew";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { FAQ } from "./components/pages/FAQ";
import { Checkout } from "./components/pages/Checkout";
import { RefundPolicy } from "./components/pages/RefundPolicy";
import { TermsConditions } from "./components/pages/TermsConditions";
import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import { ElementsOfLife } from "./components/pages/ElementsOfLife";
import { BioGeometry } from "./components/pages/BioGeometry";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "shop/:category", Component: Shop },
      { path: "product/:id", Component: ProductDetail },
      { path: "about", Component: About },
      { path: "elements", Component: ElementsOfLife },
      { path: "biogeometry", Component: BioGeometry },
      { path: "faq", Component: FAQ },
      { path: "contact", Component: Contact },
      { path: "checkout", Component: Checkout },
      { path: "refund-policy", Component: RefundPolicy },
      { path: "terms-conditions", Component: TermsConditions },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "*", Component: NotFound },
    ],
  },
]);
