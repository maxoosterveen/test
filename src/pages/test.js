import React from "react"

import StoreLayout from "../components/StoreLayout"
import SEO from "../components/SEO"

const TestPage = () => (
  <StoreLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    Thank you for your order.
  </StoreLayout>
)

export default TestPage
