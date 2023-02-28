import React from 'react'

const ExpertFilter = () => {
  return (
    <div className='expert-filter-wrapper'>
        <div>
            <h3>კატეგორიები</h3>
            <select>
                <option value="sada">მშენებლობა და რემონტი</option>
                <option value="sada">ავეჯის დამზადება და რესტავრაცია </option>
                <option value="sada">საოჯახო ტექნიკის ხელოსნები</option>
                <option value="sada">ავტოხელოსანი</option>
            </select>
        </div>

        <div>
            <h3>ქვე კატეგორიები</h3>
            <select>
                <option value="sada">მშენებლობა და რემონტი</option>
                <option value="sada">ავეჯის დამზადება და რესტავრაცია </option>
                <option value="sada">საოჯახო ტექნიკის ხელოსნები</option>
                <option value="sada">ავტოხელოსანი</option>
            </select>
        </div>


        <div className='radio-wrapper'>
            <h3>ფასის მიხედვით ფილტრაცია</h3>
            <div>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">ყველა</label>
            </div>
            <div>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">მაღალი </label>
            </div>
            <div>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="html">დაბალი</label>
            </div>
        </div>

        



    </div>
  )
}

export default ExpertFilter