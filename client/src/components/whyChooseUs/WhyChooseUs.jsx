import React from 'react'
import whyUs from '../../assets/whyus.png'
import './WhyChooseUs.css'
export const WhyChooseUs = () => {
  return (
    <div className='WhyUsContainer'>
     <div className='WhyUsPicContainer'>
        <img src={whyUs} className='whyUsPic'/>
     </div>
     <div className='whyUsRightSideTextContainer'>
        <p className='WhyUsText'>So why choose us? Here are a few reasons: <br />
        <br />
        1: We prioritize health: Our menu is crafted with your health in mind. We use fresh, high-quality ingredients and avoid processed foods and additives. We also offer many options for people with specific dietary needs, such as gluten-free, vegetarian, and vegan <br /> <br />
        2:Delicious food: Just because our food is healthy doesn't mean it can't be delicious! We have a team of expert chefs who work hard to create flavorful and satisfying dishes that will leave you feeling great. <br /> <br />
        3:Convenience: We know that life can be busy, which is why we offer a range of convenient options. You can dine in at our restaurant, or order online for pickup or delivery. We also offer catering services for events and parties. <br /> <br />
        4:Community: We believe that food brings people together, and we love being a part of our community. Our restaurant is a welcoming space where you can connect with others and enjoy great food. <br /> <br />
        5: Health education: We are passionate about helping people live healthier lives. That's why we offer educational resources on our website, including information on nutrition, healthy eating, and wellness. <br /> <br />
        </p>
     </div>
    </div>
  )
}
