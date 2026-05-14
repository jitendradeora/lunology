import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";

const Home = lazy(() =>
  import("./components/pages/Home").then((m) => ({ default: m.Home })),
);
const Shop = lazy(() =>
  import("./components/pages/ShopNew").then((m) => ({ default: m.Shop })),
);
const ProductDetail = lazy(() =>
  import("./components/pages/ProductDetailNew").then((m) => ({
    default: m.ProductDetail,
  })),
);
const About = lazy(() =>
  import("./components/pages/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("./components/pages/Contact").then((m) => ({ default: m.Contact })),
);
const FAQ = lazy(() =>
  import("./components/pages/FAQ").then((m) => ({ default: m.FAQ })),
);
const Checkout = lazy(() =>
  import("./components/pages/Checkout").then((m) => ({ default: m.Checkout })),
);
const OrderConfirmation = lazy(() =>
  import("./components/pages/OrderConfirmation").then((m) => ({
    default: m.OrderConfirmation,
  })),
);
const RefundPolicy = lazy(() =>
  import("./components/pages/RefundPolicy").then((m) => ({
    default: m.RefundPolicy,
  })),
);
const TermsConditions = lazy(() =>
  import("./components/pages/TermsConditions").then((m) => ({
    default: m.TermsConditions,
  })),
);
const PrivacyPolicy = lazy(() =>
  import("./components/pages/PrivacyPolicy").then((m) => ({
    default: m.PrivacyPolicy,
  })),
);
const ElementsOfLife = lazy(() =>
  import("./components/pages/ElementsOfLife").then((m) => ({
    default: m.ElementsOfLife,
  })),
);
const BioGeometry = lazy(() =>
  import("./components/pages/BioGeometry").then((m) => ({
    default: m.BioGeometry,
  })),
);
const NotFound = lazy(() =>
  import("./components/pages/NotFound").then((m) => ({ default: m.NotFound })),
);

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
      { path: "order-confirmation", Component: OrderConfirmation },
      { path: "refund-policy", Component: RefundPolicy },
      { path: "terms-conditions", Component: TermsConditions },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "*", Component: NotFound },
    ],
  },
]);
