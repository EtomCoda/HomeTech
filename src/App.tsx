import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactUs';
import CategoryPage from './pages/CategoryPage';
import AccountFavorites from './pages/Favourites';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ComparisonPage from './pages/ComparisonPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import PaymentCompletePage from './pages/PaymentCompletePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="payment-complete" element={<PaymentCompletePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="category/:categoryId" element={<CategoryPage />} />
      <Route path="product/:productId" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog/:postId" element={<BlogPostPage />} />
      <Route path="account/favorites" element={<AccountFavorites />} />
      <Route path="compare" element={<ComparisonPage />} />
      <Route path="search" element={<SearchResultsPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return null; // Component no longer needed as we use RouterProvider
}

export default App;