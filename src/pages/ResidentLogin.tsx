import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const ResidentLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    trackButtonClick('resident_login_submit', 'resident_login_page');

    // Simulate API call (replace with actual authentication)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: 'Login successful',
        description: 'Redirecting to your resident portal...',
      });

      // In a real application, you would:
      // 1. Call your authentication API
      // 2. Store the token/session
      // 3. Redirect to the resident portal
      // window.location.href = '/resident-portal';
    } catch (error) {
      toast({
        title: 'Login failed',
        description: 'Invalid email or password. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Resident Login - HHP Asset Management</title>
        <meta name="description" content="Access your resident portal to manage your account, pay rent, submit maintenance requests, and more." />
      </Helmet>

      {/* Hero/Header Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/resident-login-image.avif)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="hero-title text-white mb-4 drop-shadow-lg">
              Resident Login
            </h1>
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-md">
              Access your resident portal
            </p>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-elegant p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hhp-charcoal mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-hhp-charcoal/50" />
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3 min-h-[48px] text-base ${
                        errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-hhp-charcoal mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-hhp-charcoal/50" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                        if (errors.password) setErrors({ ...errors, password: undefined });
                      }}
                      className={`w-full pl-10 pr-12 py-3 min-h-[48px] text-base ${
                        errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''
                      }`}
                      placeholder="Enter your password"
                      aria-invalid={!!errors.password}
                      aria-describedby={errors.password ? 'password-error' : undefined}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hhp-charcoal/50 hover:text-hhp-charcoal transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, rememberMe: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-sm text-hhp-charcoal cursor-pointer select-none"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/contact"
                    className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors"
                    onClick={() => {
                      trackLinkClick('Forgot Password', '/contact');
                      trackButtonClick('forgot_password', 'resident_login_page');
                    }}
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hhp-navy hover:bg-hhp-navy/90 text-white py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Signing in...</span>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>

                {/* Support Link */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-hhp-charcoal mb-2">
                    Don't have an account?
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors font-medium"
                    onClick={() => {
                      trackLinkClick('Contact Support - Resident Login', '/contact');
                      trackButtonClick('contact_support', 'resident_login_page');
                    }}
                  >
                    Contact support
                  </Link>
                </div>
              </form>
            </div>

            {/* Footer Links */}
            <div className="mt-8 space-y-4 text-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-hhp-charcoal hover:text-hhp-navy transition-colors"
                onClick={() => trackLinkClick('Back to Home', '/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <div className="text-sm text-hhp-charcoal">
                <span className="mr-2">Need investor access?</span>
                <Link
                  to="/investor-portal"
                  className="text-hhp-navy hover:text-hhp-navy/80 transition-colors font-medium"
                  onClick={() => {
                    trackLinkClick('Investor Portal', '/investor-portal');
                    trackButtonClick('investor_portal_link', 'resident_login_page');
                  }}
                >
                  Investor Portal
                </Link>
              </div>
              <div className="text-sm text-hhp-charcoal/70">
                <p>Need help? Contact us at</p>
                <a
                  href="mailto:info@hhpasset.com"
                  className="text-hhp-navy hover:text-hhp-navy/80 transition-colors"
                  onClick={() => trackButtonClick('email_support', 'resident_login_page')}
                >
                  info@hhpasset.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResidentLogin;

