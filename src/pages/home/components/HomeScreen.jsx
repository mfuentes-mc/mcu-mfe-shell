import React, {Suspense, lazy} from 'react'
import SafeComponent from '../../../components/error/SafeComponent';
const UserInfo = lazy(()=>import('users/UserInfo'));
const HomeScreen = () => {
  return (
    <div>
          <div className="py-5 px-5">
            <div className="p-1 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Micro-frontends Architecture - ReactJs</h1>
                <h3 className="fw-bold">Mango Chango University</h3>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem atque officia sint magni eum ducimus labore dolore iure aliquam. Esse ducimus quos explicabo blanditiis voluptatem unde ea doloremque harum optio.</p>
              </div>
            </div>
            
            <div className="row align-items-md-stretch">
              <SafeComponent>
                <Suspense fallback={<div>Loading...</div>}>
                  <UserInfo/>
                </Suspense>
              </SafeComponent>
              <SafeComponent>
                <Suspense fallback={<div>Loading...</div>}>
                  <UserInfo/>
                </Suspense>
              </SafeComponent>
            </div>
            <footer className="pt-3 mt-4 text-muted border-top">
              &copy; 2022
            </footer>
          </div>
    </div>
  )
}
export default HomeScreen
