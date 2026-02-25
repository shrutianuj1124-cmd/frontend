import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBlogs from './pages/admin/AdminBlogs';
import AddBlog from './pages/admin/AddBlog';
import EditBlog from './pages/admin/EditBlog';
import AdminInquiries from './pages/admin/AdminInquiries';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="app-wrapper">
          <Routes>
            {/* Main Website Routes */}
            <Route path="/*" element={
              <>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogDetails />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="blogs" element={<AdminBlogs />} />
                <Route path="blogs/add" element={<AddBlog />} />
                <Route path="blogs/edit/:id" element={<EditBlog />} />
                <Route path="inquiries" element={<AdminInquiries />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
