const ApiRoutes = {
    LOGIN : {
        path:'/users/signin',
        authentication:false,
        notify:true
    },
    CREATE_BLOG:{
        path:'/blogs/createBlog',
        authentication:true,
        notify:true
    },
    GET_ALL_BLOGS:{
        path:'/blogs/getAllBlogs',
        authentication:true,
        notify:false
    },
    GET_BLOG_BY_ID:{
        path:'/blogs/getBlogById',
        authentication:true,
        notify:false
    },
    GET_BLOGS_BY_USER_ID:{
        path:'/blogs/getBlogsByUserId',
        authentication:true,
        notify:false
    },
    GET_ALL_FEEDS:{
        path:'/blogs/getAllFeeds',
        authentication:true,
        notify:false
    },
    CHANGE_STATUS:{
        path:'/blogs/changeStatus',
        authentication:true,
        notify:true
    },
    UPDATE_BLOG:{
        path:'/blogs/updateBlog',
        authentication:true,
        notify:true
    },
    LIKE_UNLIKE:{
        path:'/blogs/likeUnlike',
        authentication:true,
        notify:false
    }


}

export default ApiRoutes