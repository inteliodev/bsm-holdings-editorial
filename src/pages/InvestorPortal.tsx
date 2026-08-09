import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, TrendingUp, FileText, BarChart3, Shield, Download, Briefcase } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { trackButtonClick, trackLinkClick } from '@/utils/analytics';
import { Helmet } from 'react-helmet-async';

const InvestorPortal = () => {
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
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    trackButtonClick('investor_portal_submit', 'investor_portal_page');

    // Simulate API call (replace with actual authentication)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: 'Login successful',
        description: 'Redirecting to your investor portal...',
      });

      // In a real application, you would:
      // 1. Call your authentication API
      // 2. Store the token/session
      // 3. Redirect to the investor portal
      // window.location.href = '/investor-portal/dashboard';
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
        <title>Investor Portal - HHP Asset Management</title>
        <meta name="description" content="Access your investor portal to view portfolio performance, financial reports, market insights, transaction history, and investment documentation." />
      </Helmet>

      {/* Hero/Header Section */}
      <section 
        className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: 'url(/images/investment-sales-capital-markets-hero.webp)' }}
      >
        <div className="absolute inset-0 bg-hhp-navy/60"></div>
        <div className="relative z-10 container-premium">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Investor Portal
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-4">
              Access your portfolio and investment data
            </p>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Secure, comprehensive access to real-time performance metrics, financial reporting, and detailed investment reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container-premium">
          <div className="max-w-md mx-auto">
            {/* Login Form */}
            <div className="bg-white rounded-lg shadow-elegant p-6 sm:p-8 mb-8">
              <h2 className="text-xl font-semibold text-hhp-navy mb-6 text-center">Sign In</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email/Username Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hhp-charcoal mb-2">
                    Email Address or Username *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-hhp-charcoal/50" />
                    <Input
                      id="email"
                      type="text"
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
                      trackLinkClick('Forgot Password - Investor', '/contact');
                      trackButtonClick('forgot_password', 'investor_portal_page');
                    }}
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Security Notice */}
                <div className="flex items-start space-x-2 bg-blue-50 border border-blue-200 rounded-md p-3">
                  <Shield className="h-5 w-5 text-hhp-navy flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-hhp-charcoal">
                    Enterprise-grade security with encrypted data transmission. Your investment data is protected with access controls and encrypted transmission.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hhp-navy hover:bg-hhp-navy/90 text-white py-3 sm:py-4 min-h-[48px] sm:min-h-[52px] text-sm sm:text-base font-medium"
                  onClick={() => trackButtonClick('investor_portal_sign_in', 'investor_portal_page')}
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
              </form>
            </div>

            {/* Portal Features Section */}
            <div className="bg-white rounded-lg shadow-elegant p-6 sm:p-8 mb-8">
              <h3 className="text-lg font-semibold text-hhp-navy mb-4 flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Portal Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-hhp-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-hhp-charcoal">Real-time Portfolio Performance</p>
                    <p className="text-xs text-hhp-charcoal/70">Live metrics and analytics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-hhp-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-hhp-charcoal">Asset-Level Financial Reports</p>
                    <p className="text-xs text-hhp-charcoal/70">Detailed performance data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-hhp-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-hhp-charcoal">Market Insights & Analysis</p>
                    <p className="text-xs text-hhp-charcoal/70">Market research access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Download className="h-5 w-5 text-hhp-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-hhp-charcoal">Document Library</p>
                    <p className="text-xs text-hhp-charcoal/70">Transaction history & docs</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-hhp-charcoal/70">
                  Additional features: Capital calls and distributions tracking, transaction documentation, compliance reporting, and investor communications.
                </p>
              </div>
            </div>

            {/* Footer Links */}
            <div className="space-y-4 text-center">
              <div className="bg-white rounded-lg shadow-elegant p-4">
                <p className="text-sm font-medium text-hhp-charcoal mb-2">
                  First-time access?
                </p>
                <p className="text-xs text-hhp-charcoal/70 mb-3">
                  Contact investor relations to request portal access for your investment accounts.
                </p>
                <a
                  href="mailto:investors@hhpasset.com"
                  className="text-sm text-hhp-navy hover:text-hhp-navy/80 transition-colors font-medium"
                  onClick={() => trackButtonClick('email_investor_relations', 'investor_portal_page')}
                >
                  investors@hhpasset.com
                </a>
              </div>

              <Link
                to="/"
                className="inline-flex items-center text-sm text-hhp-charcoal hover:text-hhp-navy transition-colors"
                onClick={() => trackLinkClick('Back to Home - Investor', '/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              
              <div className="text-sm text-hhp-charcoal">
                <span className="mr-2">Need resident access?</span>
                <Link
                  to="/resident-login"
                  className="text-hhp-navy hover:text-hhp-navy/80 transition-colors font-medium"
                  onClick={() => {
                    trackLinkClick('Resident Login - Investor', '/resident-login');
                    trackButtonClick('resident_login_link', 'investor_portal_page');
                  }}
                >
                  Resident Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorPortal;

