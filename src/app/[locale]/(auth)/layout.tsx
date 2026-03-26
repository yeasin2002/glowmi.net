import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-background flex min-h-screen items-center justify-center p-4">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
