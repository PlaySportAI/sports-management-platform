import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sports-blue-35 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-sports-blue mb-6">Sign In</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-sports-black mb-1">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-sports-black mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-sports-blue focus:ring-sports-blue border-gray-300 rounded accent-sports-blue"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-sports-black">Remember me</label>
            </div>

            <div className="text-sm">
              <a href="/forgot-password" className="font-medium text-sports-blue hover:text-sports-red">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-sports-blue hover:bg-sports-red text-white font-semibold rounded-md transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-sports-black">
          Don't have an account?{' '}
          <a href="/signup" className="font-medium text-sports-blue hover:text-sports-red">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
