<template>
    <div>
      <div class="nk-main">
     <Sidebar/>
        <div class="nk-wrap">
         <HeaderComponent/>
         <router-view></router-view>
         <FooterComponent/>
        </div>
        
      </div>
      <RightSidebar/>
      
    </div>
</template>
<script>

 import HeaderComponent from "./header/HeaderComponent.vue";
 import Dashboard from "./dashboard/DashboardComponent.vue";
 import Sidebar from "./sidebar/SidebarComponent.vue";
 import FooterComponent from "./footer/FooterComponent.vue";
 import RightSidebar from "./sidebar/RightSidebarComponent.vue";

    export default {
       components: {
      HeaderComponent,
        Dashboard,
        Sidebar,
        FooterComponent,
        RightSidebar
        
       }
    }
</script>
