<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Multi-purpose admin dashboard template that especially build for programmers.">
    <title>WAVE LINK</title>
    <link rel="shortcut icon" href="{{asset('images/WL.png')}}">
    <link rel="stylesheet" href="{{asset('css/style8a4f.css')}}" >
  </head>
  <body class="nk-body" data-sidebar-collapse="lg" data-navbar-collapse="lg" >
  <div class="nk-app-root" id="app">
   <app-component/>
   </div>
  </body>
  <script src="{{ mix('js/app.js')}}"></script>
  <script src="{{asset('js/bundle.js')}}"></script>
  <script src="{{asset('js/scripts.js')}}"></script>
  <script src="{{asset('js/charts/ecommerce-chart.js')}}"></script>
  <!-- <script src="{{asset('js/sweetalert/sweetalert-example.js')}}"></script> -->
  <!-- <script src="{{asset('js/data-tables/data-tables.js')}}"></script> -->
  <link rel="stylesheet" href="{{asset('css/libs/editors/quill8a4f.css?v1.1.0')}}"/>
</link>
<script src="{{asset('js/libs/editors/quill.js')}}"></script>
<script src="{{asset('js/editors/quill.js')}}"></script>
</html>