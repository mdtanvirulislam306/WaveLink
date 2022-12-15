<template>
    <div>
      <div class="nk-main">
     <Header/>
        <div class="nk-wrap">
            <Sidebar/>
         <Dashboard/>
         <Footer/>
        </div>
        
      </div>
      <RightSidebar/>
    </div>
</template>
<script>

 import Header from "./header/HeaderComponent.vue";
 import Dashboard from "./dashboard/DashboardComponent.vue";
 import Sidebar from "./sidebar/SidebarComponent.vue";
 import Footer from "./footer/FooterComponent.vue";
 import RightSidebar from "./sidebar/RightSidebarComponent.vue";

    export default {
       components: {
        Header,
        Dashboard,
        Sidebar,
        Footer,
        RightSidebar
        
       }
    }
</script>
