const ApiRoutes = {
    LOGIN : {
        path:'/users/signin',
        authentication:false
    },
    USER:{
        path:'/users',
        authentication:true
    },
    PROFILE : {
        path:'/users/profile',
        authentication:true
    }

}

export default ApiRoutes