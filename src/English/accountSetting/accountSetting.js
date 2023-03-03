import React from "react";
import "./accountSetting.css";

function AccountSetting() {
  return (
    <>
      <div style={{background:"rgb(222, 215, 222)"}}>
        <div className="as-hed">
          <p>Account Settings</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.17161 23.9997C0.939799 23.9997 0.713187 23.931 0.520433 23.8022C0.327678 23.6735 0.177443 23.4904 0.0887282 23.2763C1.37109e-05 23.0621 -0.0231937 22.8265 0.0220414 22.5991C0.0672766 22.3718 0.178922 22.1629 0.342856 21.999L21.9991 0.342791C22.2189 0.122993 22.517 -0.000488281 22.8279 -0.000488281C23.1387 -0.000488281 23.4368 0.122993 23.6566 0.342791C23.8764 0.562589 23.9999 0.8607 23.9999 1.17154C23.9999 1.48238 23.8764 1.78049 23.6566 2.00029L2.00036 23.6565C1.89162 23.7655 1.76244 23.8519 1.62021 23.9108C1.47799 23.9697 1.32554 23.9999 1.17161 23.9997Z"
              fill="#0A0A13"
            />
            <path
              d="M22.8278 23.9997C22.6739 23.9999 22.5214 23.9697 22.3792 23.9108C22.237 23.8519 22.1078 23.7655 21.999 23.6565L0.342791 2.00029C0.122993 1.78049 -0.000488281 1.48238 -0.000488281 1.17154C-0.000488281 0.8607 0.122993 0.562589 0.342791 0.342791C0.562589 0.122993 0.8607 -0.000488281 1.17154 -0.000488281C1.48238 -0.000488281 1.78049 0.122993 2.00029 0.342791L23.6565 21.999C23.8205 22.1629 23.9321 22.3718 23.9774 22.5991C24.0226 22.8265 23.9994 23.0621 23.9107 23.2763C23.822 23.4904 23.6717 23.6735 23.479 23.8022C23.2862 23.931 23.0596 23.9997 22.8278 23.9997Z"
              fill="#0A0A13"
            />
          </svg>
        </div>
        <div>
            <div className="as-img">
                <img src="../../images/veronica.png"/>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="17.75" fill="white" stroke="black" stroke-width="0.5"/>
<g clip-path="url(#clip0_894_6873)">
<path d="M26.3813 10.5337H9.61946C8.94624 10.5337 8.40039 11.0795 8.40039 11.7527V24.248C8.40039 24.9212 8.94624 25.467 9.61946 25.467H26.3813C27.0545 25.467 27.6004 24.9212 27.6004 24.248V11.7527C27.6004 11.0795 27.0546 10.5337 26.3813 10.5337ZM26.3813 11.7527V20.6185L23.9789 18.4343C23.6178 18.1061 23.0625 18.1192 22.7175 18.4645L20.286 20.8956L15.4919 15.1691C15.1295 14.7363 14.4657 14.7321 14.0979 15.1596L9.61946 20.3644V11.7527H26.3813ZM21.2004 14.9527C21.2004 14.0269 21.9507 13.2765 22.8765 13.2765C23.8024 13.2765 24.5527 14.0269 24.5527 14.9527C24.5527 15.8786 23.8025 16.6289 22.8765 16.6289C21.9507 16.6289 21.2004 15.8786 21.2004 14.9527Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_894_6873">
<rect width="19.2" height="19.2" fill="white" transform="translate(8.40039 8.40039)"/>
</clipPath>
</defs>
</svg>

            </div>
            {/* <form>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input
                  class="form-control"
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter Topic Title"
                  required
                />
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
            </form> */}
            <form className="as-form">
  <div class="mb-3 col-md-4 col-sm-4">
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input type="email" placeholder="Veronica Ben" class="form-control as-imp" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_894_6828)">
<path d="M15.8333 10.0383C15.3725 10.0383 15 10.4117 15 10.8716V17.5383C15 17.9974 14.6266 18.3716 14.1667 18.3716H2.5C2.03995 18.3716 1.66672 17.9974 1.66672 17.5383V5.87158C1.66672 5.41245 2.03995 5.0383 2.5 5.0383H9.16672C9.62753 5.0383 10 4.66492 10 4.20502C10 3.74496 9.62753 3.37158 9.16672 3.37158H2.5C1.12167 3.37158 0 4.49326 0 5.87158V17.5383C0 18.9166 1.12167 20.0383 2.5 20.0383H14.1667C15.545 20.0383 16.6667 18.9166 16.6667 17.5383V10.8716C16.6667 10.4108 16.2941 10.0383 15.8333 10.0383Z" fill="#0A0A13"/>
<path d="M7.81344 9.27936C7.75515 9.33765 7.71594 9.4118 7.6993 9.49176L7.11016 12.4385C7.0827 12.5751 7.12603 12.7159 7.2243 12.8151C7.30349 12.8943 7.41015 12.9367 7.5194 12.9367C7.54595 12.9367 7.57357 12.9343 7.60104 12.9285L10.5469 12.3394C10.6285 12.3226 10.7027 12.2835 10.7602 12.2251L17.3535 5.63174L14.4077 2.68604L7.81344 9.27936Z" fill="#0A0A13"/>
<path d="M19.3901 0.64846C18.5778 -0.16407 17.256 -0.16407 16.4443 0.64846L15.291 1.80172L18.2369 4.74758L19.3901 3.59417C19.7835 3.20171 20.0002 2.67834 20.0002 2.1217C20.0002 1.56506 19.7835 1.04168 19.3901 0.64846Z" fill="#0A0A13"/>
</g>
<defs>
<clipPath id="clip0_894_6828">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

  </div>
  <div class="mb-3 col-md-4 col-sm-4">
    <label for="exampleInputPassword1" class="form-label">Email id</label>
    <input type="password" placeholder="Veronica@gmail.com" class="form-control as-imp" id="exampleInputPassword1"/>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_894_6828)">
<path d="M15.8333 10.0383C15.3725 10.0383 15 10.4117 15 10.8716V17.5383C15 17.9974 14.6266 18.3716 14.1667 18.3716H2.5C2.03995 18.3716 1.66672 17.9974 1.66672 17.5383V5.87158C1.66672 5.41245 2.03995 5.0383 2.5 5.0383H9.16672C9.62753 5.0383 10 4.66492 10 4.20502C10 3.74496 9.62753 3.37158 9.16672 3.37158H2.5C1.12167 3.37158 0 4.49326 0 5.87158V17.5383C0 18.9166 1.12167 20.0383 2.5 20.0383H14.1667C15.545 20.0383 16.6667 18.9166 16.6667 17.5383V10.8716C16.6667 10.4108 16.2941 10.0383 15.8333 10.0383Z" fill="#0A0A13"/>
<path d="M7.81344 9.27936C7.75515 9.33765 7.71594 9.4118 7.6993 9.49176L7.11016 12.4385C7.0827 12.5751 7.12603 12.7159 7.2243 12.8151C7.30349 12.8943 7.41015 12.9367 7.5194 12.9367C7.54595 12.9367 7.57357 12.9343 7.60104 12.9285L10.5469 12.3394C10.6285 12.3226 10.7027 12.2835 10.7602 12.2251L17.3535 5.63174L14.4077 2.68604L7.81344 9.27936Z" fill="#0A0A13"/>
<path d="M19.3901 0.64846C18.5778 -0.16407 17.256 -0.16407 16.4443 0.64846L15.291 1.80172L18.2369 4.74758L19.3901 3.59417C19.7835 3.20171 20.0002 2.67834 20.0002 2.1217C20.0002 1.56506 19.7835 1.04168 19.3901 0.64846Z" fill="#0A0A13"/>
</g>
<defs>
<clipPath id="clip0_894_6828">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

  </div>
  <div class="mb-3 col-md-4 col-sm-4">
    <label for="exampleInputPassword1" class="form-label">Mobile  Number</label>
    <input type="password" placeholder="999 555 0505" class="form-control as-imp" id="exampleInputPassword1"/>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_894_6828)">
<path d="M15.8333 10.0383C15.3725 10.0383 15 10.4117 15 10.8716V17.5383C15 17.9974 14.6266 18.3716 14.1667 18.3716H2.5C2.03995 18.3716 1.66672 17.9974 1.66672 17.5383V5.87158C1.66672 5.41245 2.03995 5.0383 2.5 5.0383H9.16672C9.62753 5.0383 10 4.66492 10 4.20502C10 3.74496 9.62753 3.37158 9.16672 3.37158H2.5C1.12167 3.37158 0 4.49326 0 5.87158V17.5383C0 18.9166 1.12167 20.0383 2.5 20.0383H14.1667C15.545 20.0383 16.6667 18.9166 16.6667 17.5383V10.8716C16.6667 10.4108 16.2941 10.0383 15.8333 10.0383Z" fill="#0A0A13"/>
<path d="M7.81344 9.27936C7.75515 9.33765 7.71594 9.4118 7.6993 9.49176L7.11016 12.4385C7.0827 12.5751 7.12603 12.7159 7.2243 12.8151C7.30349 12.8943 7.41015 12.9367 7.5194 12.9367C7.54595 12.9367 7.57357 12.9343 7.60104 12.9285L10.5469 12.3394C10.6285 12.3226 10.7027 12.2835 10.7602 12.2251L17.3535 5.63174L14.4077 2.68604L7.81344 9.27936Z" fill="#0A0A13"/>
<path d="M19.3901 0.64846C18.5778 -0.16407 17.256 -0.16407 16.4443 0.64846L15.291 1.80172L18.2369 4.74758L19.3901 3.59417C19.7835 3.20171 20.0002 2.67834 20.0002 2.1217C20.0002 1.56506 19.7835 1.04168 19.3901 0.64846Z" fill="#0A0A13"/>
</g>
<defs>
<clipPath id="clip0_894_6828">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

  </div>
  <div>
  <button type="submit" class="btn as-btn">Update Details</button>
  </div>
</form>
        </div>
      </div>
    </>
  );
}

export default AccountSetting;
