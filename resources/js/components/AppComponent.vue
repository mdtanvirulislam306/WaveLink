<template>
    <div>
      <div class="nk-main">
     <Sidebar/>
        <div class="nk-wrap">
         <Header/>
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
