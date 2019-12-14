<template>
  <div>
    <Intro/>
    <About/>
    <Service/>
    <div class="row ">
      <div class="col-sm-12">
        <div class="title-box text-center">
          <h3 class="title-a text-light">
            Statistics
          </h3>
          <p class="subtitle-a">
            This is my personnal statistics
          </p>
          <div class="line-mf"></div>
        </div>
      </div>
    </div>
    <WorkStat/>
    <div class="row sect-pt4">
      <div class="col-sm-12">
        <div class="title-box text-center">
          <h3 class="title-a text-light">
            Contact
          </h3>
          <p class="subtitle-a">
            Send me an email if you want
          </p>
          <div class="line-mf"></div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Intro from "./Intro"
import About from "./about"
import Service from "./service"
import WorkStat from "./workStat"
import Footer from "./footer"

export default {
    components: {
        Intro,
        About,
        Service,
        WorkStat,
        Footer
    }
}
</script>
