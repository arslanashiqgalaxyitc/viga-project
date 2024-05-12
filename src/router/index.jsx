import React, { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
// ====================== LAYOUTS ===========================
const PublicRoutes = lazy(() => import('./components/PublicRoutes'));
const PrivateLayout = lazy(() => import('./components/PrivateLayout'));

// ======================= PAGES ============================
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

function index() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="login" element={<>Login Page</>} />
          </Route>

          <Route path="/" element={<PrivateLayout />}>
            <Route path="" index element={<> </>} />
            <Route path="fleet-manegment" element={<>1</>} />
            <Route path="fleet-dashboard" element={<>1</>} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default index;
