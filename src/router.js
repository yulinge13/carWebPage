import HomePage from './pages/home/homePage'
import HomePageQ2 from './pages/homeQ2/index.jsx'
import productAddPage from './pages/productAdd/productAdd'
import ClassPage from './pages/class/class'
import User from './pages/user/user'
import Order from './pages/order/order'
import OrderDetail from './pages/orderDetail/orderDetail'
import ProductDetail from './pages/productDetail/productDetail'
import SwiperCom from './components/swiper/index'
export const router = [
    {
        path:'/',
        component:HomePage,
        exact:true
    },
    {
        path:'/q2',
        component:HomePageQ2,
        exact:true
    },
    {
        path:'/productAdmin',
        component:productAddPage,
        exact:true
    },
    {
        path:'/class',
        component:ClassPage,
        exact:true
    },
    {
        path:'/user',
        component:User,
        exact:true
    },
    {
        path:'/orderLists',
        component:Order,
        exact:true
    },
    {
        path:'/orderDetail',
        component:OrderDetail,
        exact:true
    },
    {
        path:'/productDetail',
        component:ProductDetail,
        exact:true
    },
    {
        path:'/swiper',
        component:SwiperCom,
        exact:true
    }
]