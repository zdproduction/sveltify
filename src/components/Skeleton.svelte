<div></div>

<style>
  div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #DDDBDD;
    overflow: hidden;
  }
  div::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(255, 255, 255, 0)), color-stop(20%, rgba(255, 255, 255, 0.2)), color-stop(60%, rgba(255, 255, 255, 0.5)), to(rgba(255, 255, 255, 0)));
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));
    animation: shimmer 2s infinite;
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
</style>
