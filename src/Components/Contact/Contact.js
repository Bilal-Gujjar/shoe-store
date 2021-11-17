
import React from 'react'

function Contact() {
    return (
        <div className="container">
        <form>
      
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="Pakistan">Pakistan</option>
            <option value="Canada">Canada</option>
            <option value="Usa">USA</option>
            <option value='Other'>Others</option>
          </select>
          <input type="submit" value="Submit"/>
      
        </form>
      </div>
    
                    )
}

                    export default Contact
