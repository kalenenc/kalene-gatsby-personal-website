import React from "react"
import quickLinks from './style-modules/quickLinks.module.css'

const QuickLinks = _props => (

  <section className={quickLinks.red}>
        
        <h3>Quick links</h3>

        <h4>where to find me:</h4>
        <ul>
          <li>twitter</li>
          <li>linked in</li>
          <li>github</li>
          <li>codepen</li>
        </ul>

        <h4>interested in learning to code?</h4>

        <p>read about my journey and tips here <a href="#">here</a>. it's a few years old and perhaps a little cheesy, but my advice still stands.</p>

        <h5>UI resources</h5>
        <ul>
          <li>free code camp</li>
          <li>gwen faraday</li>
          <li>odin project</li>
          <li>academy pittsburgh</li>
        </ul>



  </section>


  
)

export default QuickLinks;