import React, { Component } from 'react'
import './header.less'
export class Header extends Component {
  render() {
    return (
        <div className="header">
          <div className="head_icon header_downLoad">
            <img
              src="https://m.taoshouyou.com/static/home/static/img/index/downloadApp_e637c4a.png"
              alt=""
            />
          </div>
          <div className="header_search">
            <a href="/">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAAAXNSR0IArs4c6QAAAxlJREFUSA21lktoE0EYx91EctLk4OOQ+rh5qChIE7BiRc1RBEXQimAPQvOoVnrwWJvaow9IgzHpzZ7Ui4JY8GAOKmIlQUGo4MWDWg+NoDlK0vj7ht1lMt3YbaQDw3wz3/8xszs7s9YGnyWVSh0A2ru8vBwVSiAQWKRZKBaL76Xvt1j/Ag4PD0fIX7Ms62Kr1drphSX3lfH75G/NzMz89sLoYx0Nk8nkOYB3EdoiBBEmfkX7XfrEPcQDtGoixD8ZHimVSg8l36l4GmI2idB1ISFUDgaD44VC4Y2XSCaTOdRsNqfAH7fxNzCd8MKqvJnA7ArkaYwa5K5CLpgYrz68DOM5uBvhjsLLe+HaVggpBuEtQPZEYJAN8ciL1GmMjXWWTfUAwyaYfkwrJjZgDNykH4Rwe61moiMc4coq6YrWiuIaptPpgwCPglgKhUJTK5A+B2zukmiJpklzDXnxp+3kbD6fr5tAv32bOyt4TdOlu4aMHJNRduRTN9tloGkoTV1GN9whCWb1WQd0E2saSlPX0A3VBx6NRuUD/q+iaShNXUw3VEa1Wm2rDugm1jRqJl83/CbJRqOxxwStte9o8IkoTZ2vG76QBNv5pA7oJnY0aMsmXzd8YieH7FvCxPrq29whAXNaPTZJriFXyzyPoMys5EV3PHxNAY/+hGiIFifPOzPvGkoCoNx9cmiPca6eN8Gr9W3OmGiIlhc+qA9Wq9UffX19srNOUE8R/2JsXsd0inmUo+RKVFnEZZ6Y5wHSdls4YpDHiSepTNZ6STvO45HLt+VgpGUVFjfEAKHch0dkiDoRDofv1Ov1S5hO028rnoaCQOgMV809wm02YxHD1wirG5+4h/gwOfWPQ7vEJklTn3PSzJEbAFPgihqx+appe6R6olKpfEokEsU/FMi7ye2i7qX221XizdQvmExHIpHBXC73IR6Ph8BfYFw48Vgstp3XMkesSscVOgCn5THvY8a9VLUiRBepCzy2jw7Gafnt2OSsUsbgyL+O+nPwbeiI+W1t02dMSt5tlonJnljfks1mA1zC+zFdt4WtuoK/4rBMnEYFDFcAAAAASUVORK5CYII="
                  alt=""
                />
                <span id="btn_header_line">请输入游戏名称或商品ID</span>
              </div>
            </a>
          </div>
          <div className="head_icon header_kefu">
            <img
              src="https://m.taoshouyou.com/static/home/static/img/index/kefu_0ae7cfc.png"
              alt=""
            />
          </div>
        </div>
    )
  }
}

export default Header
