import React from 'react'
import { Col, Container, Row,Card, ProgressBar} from "react-bootstrap";
import x from "../../images/ipad.jpg"
import "./One.css"
function One() {
  return (
    <div >

        <section className="gradient-custom h-100" style={{ backgroundColor:"#eee"}}>
        <Container className="confirm py-5">
        <Row className="justify-content-center align-items-center">
          <Col>
          <Card style={{borderRadius:"10px"}}>
          <Card.Header className="px-4 py-4">
        <Row className="align-items-center justify-content-center fw-bold text-muted">
          <p>Order History        
          </p>
        </Row>
        </Card.Header>
       <Card.Body>
        <Card.Body>
        <Card className='py-4 px-4 my-4' style={{fontSize:"20px"}}>
          <Row className='text-Center d-flex justify-content-center align-items-center fw-bold'>
            <Col>
            <Card.Img src={"https://images.pexels.com/photos/3755931/pexels-photo-3755931.jpeg"} className="img-fluid img" />
            </Col>
            <Col><p>Crop-Top</p></Col>
            <Col><p>Red</p></Col>
            <Col><p>Size : M</p></Col>
            <Col><p>Qty:1</p></Col>
            <Col><p>$19</p></Col>
          </Row>      
        </Card>
        <Card className='py-4 px-4 my-4' style={{fontSize:"20px"}}>
          <Row className='text-Center d-flex justify-content-center align-items-center fw-bold'>
            <Col>
            <Card.Img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgSEhEYGBgYGBgZGBgYGBgYGRgaGRgaHBkYGBgcIS4lHB4rHxgaJzgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHzQrISsxMTQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Mf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABCEAACAQIDBAcFBQcEAQUBAAABAgADEQQSIQUxQVEGImFxgZGhEzJCscEHYtHh8CMzUnOCsvEUcpKiwiRDU7PiFf/EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/8QAHhEBAQEAAwADAQEAAAAAAAAAAAECESExAxJBMmH/2gAMAwEAAhEDEQA/AIQscFjwsULNDAscFjwscFgR2i5ZIFi5YEeWLlj7QtAZlmd6Q7WKfsqbWPxtxW/wr975S7x+JFNGc8Bp2nhPPw5dy7m+t9eJPH6yNa4XnPKww2zmKZje5136+J3ylxfVawv5zQvtC1NrDjYDn2euv4Tn6P8AR6ti3L5dL6tbTuE551+10ufyOBs4pLVVyrq1rg2NrDL3jSXOwOkpcilXIzHRX3ZuxuAM1dXoITTKFsvZztMD0h6NVcMc+9L7xwPbKzueJ1i+t4IlpTdGdp+1TKx66WB7eRl5adZXKoyIhEfaJaAwiNKx5EQiBGVjCsmIjSIEJWMKyciMZZogywkuWECzAihY4LHhZgYFjrRwEW0Bloto60LQGWhaPtEYQMt0rxNstPxP0+szi0tAeNz6b5a9JjeqL7rqPDSNwmELcNNflYTz6vb0Yz05qGFarVp0Ad5GY8r6k+U902ThaVCklOkgAAHieZnjOxayJi87nKFJPE6dwnpVHpVhmYU6bMzH7jW8SRJtq+IvMZUJEx3SWgHpOrDRgROjpPtypTS1MgMeJF7dw4ndMP8A692f2bIXdrZmdTfrC4sT38NO2Jm3stk6ZrZ+LahUzD4TlccwDPRsNWV0V0NwwuDPPOkGHalWzW94C/fuMtuiW1kQtTd7I2q3+FuI7jv8O2d8159RsrRCJJaNMtCMiNIkhEaRAYREIjyI0iAwiNIkhjTNEVoR9oQLUCLaOtC0wNtFtFtC0BLQtHWiWgJaIwj7RCIGI20l6pFr2by3a+kZV2gqZadPnctztrYeVom36pV6gG/Mdeyw/XjKjCIbl23AceOv68jPPY9Mqz2e9Rqrez0zDXgbC248Jf7K6O4ipXDioQtwbBTuG8G51JPEkym6O1QuIGbS4J15H/E9b2fiVAAUanlJ546Xxz2ftjY1F6ae0QMF0Ol9LcRxlG+xKIOca23ch3CWO1ukeRXprSN10BcizEC+gBJt32mcw21qj0i72Vr7gLAjmJnZn/WT6b4dCSx+FWt38L+MxWDW7KO0X7rzXdK7tTdm3hl/uA+sz2ysPmJPKds/y47709PwtTMitzUH0kpEjwqZUA5ADyAH0kpE6uJhEaRJCI0iBGRGkSQiNIgRkRpkhEaRNEdoR1oQLaFo60LTAloWjrRbQG2haOtC0Blohj7Su2xWYJ7On773VewfEx7AJlvDZOWQ22yvVZuBPDjykVLCZAaji9vdTm3C/deJjuq2h0W+vd9dJDiMVamw+Nh/xXkO066zz3t6ZxI4tm4wtVJY3NyQezcbdm4+c9T2DiaipmSzt8IJt68J4oGZGzKbEagz0zo7WcU0rIbhgCV5HjY98ref1ONeyr7b9XFuv7T2aDgFXOe/ObWMzuHwrqc9So7AbgT1R224zZvtmkU1S7ciJl9p4vObAADskzl0uuuGS6V44ZRSHvMczdgB08z8px9HayLUQVD1Sb24Fh7oPr4gTl2+tqxPMA/OQVAMqkcR6g6idZ1I89vNr1ykQVBEcRMr0S2uXHsnPXUXW/xAcDzPbNXeXEU0xpEeRGkTWGERpEkIjJoYwjCJKRGMIEcItoQLi0W0LRbTAloWi2i2gJaEWFoDbSmxj5TVqfEAtNb/AAgi5I/5egl3Mx0nJU/swWLgB1AJ93VWHqDI14rPrM13BJ0vkIv267vG0rHYux8STwAE669Y5bAXZ9b8ri3pqPExuC2fUqA5FOXiwB159855y660pqlPMxtuE9E6IoRhUv2kdxJImZ25gUoU1W59o99O/eef6E1XRfEL7FKfIAS9zicI+O8212YoWIlbVGhMt8SmZgJT7UbJ1JyjpWU6RpqrDeL+U7NpbCZaS1AtuqpdR8LZRmYet500cB7eoikaF1BHZfX0vN9XwoKEEakz0YzzHDd+tePYDFtSdag3q17cxxHiJ6rga6uiupuGFxKaj0Ep1LFXdLqLEAMtzws2tvESx2L0YxeGzU86VEvmUrdWB3EFG0t3EzfrYz7Su+0aRJXQg2IIPIxhE0RkRLR5EYRAaZGwkpEjaAy0WEJguIWi2haAloWjrQtASFototoEuEwrVHCLvO88AOJMd0kwhoUQaFEPmJV3Y+6ODEW3Xv3S36PU7K723m3gNT8/SWQW6eBE2Z6T9u3jO1dmHUAhyWCZ03MxsCF+4pIGnE9k2dfB0MFRRVUXVLMRcsxAuSPG/nOQ7DqUq9INb2aEuxDaMQcymx9y5sT3cd849u7Zp1avs3pO6agspyZb/EgOrkdtgZuM8N1rl510mxjVKwci3VuBv0J9d0fs7b1SnayKbW5j8ZN05wop4lUUdX2aFe1Sz2MokBkanN7VnVnjXr0ybNn/ANMt+Wc2/snBj+kNSo2b2SL2XZrfKUq5ucCDM+uW/fTW9Ag9fGqHbREd7DQXFkFxx9/jPUVw+/8AKYj7I8JY4muw4IiGxsdWZ7Hssk9Eeol9O2/ysZ1zOI5avNcGHwikC9wVGUEWG4n8J1pgNNKj+YkOEcF8g4h25fHp85bXAmsio2igVSucMwGgcAi50F+I1lK2HbIKhAF79XiFv1WPeLG3C8KGK9vWqJfQ1WB11yquU+gf/kJ04irmB8beHDy0mWNlVxjCI+8QyVozI2krRjCBFaEdCBcWi2iwtMBCEWAkLRYQNLs1ctJO0E+ZvOnN1Tbjc+ciQ2RBwyr8hJMM6W1O4kbu4/WdeOnL9UIwhesarO7ZVORGPUTS11Uce03M4hsv2jlnUE87TVoKYzHNv42Itz4RitTU+8N++4H1jk4eL/atgCmKpv8AC1BQO9GYN6MvnMaiTU/aFtc4rHOAQUo/s0tu01c9+a4/pEzopznfXSeEVZe9FMFnrFyuYU0L2te7HRRax1tmI7VEpbGbz7KUvUxGoFkp7+97xPS+H7B2HicYqFMU9GgjvmROocxs3VCZQd9yTxvNBszY+0VqMHxaPQAOQ1Ezv3aWPD+KajZWCp0kf2aKuZ2LEcSWOp84A2RvGXEWqrYvt/as1WkioEsjpoHJNyctyRJ9oYu1xJRVAUDkBr3iZTbO1BZgOAN/ATWOPojVJ9vVPF2A/qNz9JcjQTMdD6pFEC3vEu3IA7poUdmQud3Dt7YEFNrlhyPpHkTmoaOw5j5TqMi+umfEZEY0kaNaY1HaEIQLmEIswEIRYCRQt9ISXBpd0H3h85o0ZXTLOfDugdkYAkLc3sdCbJpwvZ9fumdLtbXsnGcOHY8NBnsLFso6qk77Akn9a9fxxLs9Ff2lQoMgYogsADk0Zrdr3H9PbKPpTjKmEwtSq7oWsyUzTzpmdjZOrm4XudTu0mpw6BUVVAUcABpvJ08p5p9s+LAGGoXuSz1COWVco/uMi3pUnbzWmthbzPM8THyJWil5DoeZtfsuxSpiKqH4qebgPca3HT45hS80/wBnnWxmXNlLUnAI4Esg/GbGV6+u0BZ1RCxzdp+EHhceZEocftiqb00p2IuWBHM2/iHG86NlJWRK4qhVAClLMW3hrk8hp6SsxKhLVGuUIKvk35NbZT2Gx85c/wBRfekOK2jiiCiJ4BL+7pvz2sLTO7XGI9m2eiQrKwLgbswsToTwvO/H1DVoN/pmzXvcAkPYt1l0sRz4bo6nVJwyHEXXqNn9qMpW7ZRZSM2qi97W62+LThB0aQtTsBYNv7FGgE02JsECDdpM70cqZaagcpcY1yEHMzWOeppVW3EH5GdJnNi0ytS8PX/M6TI0uIzGmOaNMxSOEIQLqLCLMCQiwgJOvZS3qL2Zj/1M5Z27J/ef0mbPWXxcVN1ozBj3779PrH1hpec+DGYuCNOqDy4/hOv45T13ItlQfd/CeJfa9UJx4F/doIB2XZyZ7PtbCvUCqtTJrc9UNcchfd3zwv7TagOPZM2Y06dNGNrXOXNfyYTnrxefWcQx15GpkirJWS00HQOrlx9D7xdf+jH6ShaWXRV7YygfvN6o4mle0bVq5Uca3KqBc33Ej6ypxFDJTTiTw1HBvqY/E4pHqCndAwUkoHUtbMtiQDcDvkO3agQrmtbLYXtYk7hy4HfLQzOJwNnJUFSTvUkcZz9IDag6klrLvOvui5+nlLl6y2uLWFz6nd8rSj22P2Dn7jHxb/MBvR3EZgtPNYsdBxM0+IbO6U13Cw/GYvolUIfN2WB5Dsm22JSzOah3Dd3yomjbZs6Dlb5iSmQbbPXvJiZz0rJrRhjjEMxaOEIQLyEITAQhCASy2MnWY8lt5n8pWy72MlkJPxN6D9GVn1OvHWD1ZJhUygn+Jx5AX/Gc+YagHjOtPdXvY/OdL45wtRrN4D5mfOnTxidoYg/eX+xZ9EsBfW24W8zPnTpl1sfif5lvJQJz146Z9VdGnznRlkuBwpO4TtqUrcJH2XwrHQ8AfIzp6P3XE0CQf3qLu/jbL/5TrpKMsXA6Vqf8ymf+6zPscNouyBTxorZXOcMSWy2BOUEjKLWtwnZt2oCQm+5W/bv4TppCn7QZVa+VrkkMDqu4j5Stxt2cMf4wPQztw58uNsIFJNyf4RrpfTX1lZ0ibLhnPMKvmwEvGPvHv9BpM10vcikifxNc/wBK/i3pMHJ0Z1zHuAno2AsiBRPONg1cgFlJ46TdbKeo3XZbC28yp4mjbK7o9DoO4fKNx/XUnlui0j1R3CTpWSmNMcY0yVmQhCBeQiwmAhCEAmgweX2SA8r+JJMz80mGBVFFvhX5cZWfU68cOJQ70YX5cD38j2yxwrkohYWOXUciT+U5a5bgg9fp3zrpHqLfflX0v+M6a8c8ufFUqxqBkdAmUdUpdswY3OfMOrlO63CfOu3a18ZiH3g16nkKhA9BPpJ9xPAC/wD1nzRVXPUdxrmdz5sTOWvHTLT7KQZZNi6Y5Ti2MSFsdw5ywqsP0O6ca7zxwpSFv12yOgLVqdv/AJE/vWdLtp+uU4qP76n/ADE/vWVE16Ma1QuLoqgA6C1zu32Eqqr3IPDOPrK/E4EpjPaLUfIVNh/TlK6fDc5u/wA5avTyoCf4h8p3ca539w9v1P5zPdMAMidhPqPymidrBR2j0BMzu3VL2W3GGOXYAqJkcOhRlzFcpLCzMpWw/wBu/tmppbUxFTqphyFO4uyoD3Bjc+Uxmx9n1nJWmcqqT1uWvADWbnY2ykp2y03d+LtctrvK30Xwmzxl9Or1qyaVMM1t2ZCHX019JLhqquoKbhp3EcDO3GmnTWwLhrHQtfeOM4sMoCC3f5ydKyeY0mOMYZKyXhGwgX8IR0BsI6EBLTVA2AA4CZnDpd1HNlHrNOy7zKyjSvxTMT1Wt2GT4fNkTPvtrCoBmC23kDd5mSKt7H9b50qI5ttYgUsPXqnTJTdv+K2+k+dtlrpae0dP61SngsUzlfZspVbZs13dVUEHTib2tu7Z4nsyqAdTOO3XDTYNCB+vrH13P6P5yXDOMshxTaaaHnp9Zxd0GY23frx7pzYYn29L+ZT/AL1kqCoFOd8xJ5Dd4SPAa16X82n/APYsqIraYmmhcHq3sx0dnIF13lt0a9bNoeBFvMfjI2xKkixSwQ3yAg/DfNpv/OCDq5+JYfOehwPenqvePUEfWRYnCbzbhOt2sCbbiCPMfjHbTfLTdrWsD8oGW6LYGo7vUVrKHYLc6XvqbDfytPQ8MpC5cxPNpleguHtQVjve7eZJ+s11rcYnjL6o9q00B0W5/i3fI29I3DjqL3SbaK3P65xlracpOlZBMYTFJjDJWS8IkIGhjo2OgEIQgdGzlvVQdt/IE/SaNjYTP7KH7Rey59DLytKyjSNDcluQPr+V4tJrhe4H84xMwU2C68yR4aCKKxAt7NsxFr3UjQd97eEtDDfbHi8mDSlfWpVW4+6oLH/sFnjdKnzntfTJHq4iiuW65DoRbUt1gVOo3DfO/Z3Q7COLvQCWW5K6L4r7vpOWuXXHHDxSliaiDquR2bxBsdUPx+gntGI+z/CuoZKCMCLjLdG17AQPWUmL6AUR/wCy48Xt9ROdvHsdJnnyvMDj6lrX9J0bHr1GxFIaHrox/wBqHM1v6VM2lfoTRHBx2ZvxE58H0apU3FQZrqrnU3A6jA3sN2sSy0ubIZ+1Z7FmyLe4a9zmvoAdfhHlLLPZdeDD8fpBqSByEfOBa9juNzoOzWLiKJOULzB856OHC13Ogytflfy1lV0kxgGHY81HrLVSHUp8Vrd4t85mukNO4pUb3LugtpxOWGNP0aoKtBFW/VVRfjcAS6ZpzbLwzILEdXeeUMXiSoOSnY69ZjNFbjK9miExMNh2drt4+EQmc9LyQxhimNMxQhG3iwNFCEIBHQjYFjsVb1P6T8xLbEvkW8q9he+f9v1EtcSCb9U27pWUaR0qhKXyMRrchWbj2A8Jy42qXXLTqLTbMNWA0UanQ7ibWuQbX3S+2Uq+zXLza/eGII8CLeElr0x8Sgjtj7dn16YPadGo9ZCqhgEALC9sxOa3kQfGWtCrVFGolRCvXCJrfOrBLsOWpcf0y3o4YKSw+LU95/Dd3CdDYdGy5vhINuFxe3zmW8qk4LScAAZbWAFvykiFSeMQgcoiUxfdMawGL2ltB9pf6UU29lqcxzhQticwYdUAGy2tckzS7TGTD1S7jSm/Mi+Q+9pu7JHilvVcam7m1iQN/ZIdv4F3wtRafvslgNddRdd43i48YjK85fF12diBTGgsDoAL6brgHWTLVqEAOVV7knjexA3NYDfwnNgNjYzOSaFVxoCBTqKNTqbsLXFu3Qy3/wD5+Iy2q4VwRpdiot2jrS+U8IXrG5F0GnwoL634m8ocTSDYimeubMGvyCi+4d3rL47PqcEsPvML6MTvUngSJB0ewpqYpg5A9mpJXgcwOt+QvbxE3pnbWYZBUQEllsN17DvktZMi9cqwG69rzpNMMmRN2mq20lFj8BUvoxIB5xWJMTjVylUFr6aeErDJDSKqL7yf8/SQmRV5ITGkxSYwzFEhCEDSwiRYBCEIFjsX3zv907iRxHKWdagCdfmbyhw2JKEsoBOUgAmw8Tw3TuwNbEVUzOEQ3IsjFxv06xVT6TZqZnafrdXpqsCoFNQP4R8pOwkODvkW5ucoufCSswG+R6rxzGmbxGQwfGqDYg99tIucNqDNEcfTOojCY5SBqeGs0U+GS9Rye31P5y1AnFgEBLMOJPzneRAaxlZtFC2qtYjja4PeJZtOV0vAoWLt+8dbcgL38xE2ZhMpdyFF+qoUAWG9idBqbLr2S5dAu5ZQ4zCYmrVzrXyU1TKUKKc7EnrBt62FuY7I+0z3T63XUPxIBuMuZjbUDcOWbhoT5yrxGKdCbHMNTlY310sqvz37yfCUVfHbRTEGktNaq6lLkI2i2986agaWHIXkabcV39nUQq6Ago4s4YnfbvPbu33Nps3nXibjWfXc+ID6i+lwb77jfukZgosIhMythCYwmKTGmAQjYQ1p4QhAWJCEAmkwaZUA7Ln6zP4anmdV5n/Mu8TjFTKpPvEL4sbD1InL5L+Ovxxf4JroP1xkxF5xbLe6acGI+v1nS7GXnxGvaZWamu+15VYmm989Nh/tEnr4ZTqWJlfWDJqjX7D+MpLoobQDdVhZuR+nOdlKpfS8o2xKvo463kfOMo40g2N7jnv/AP185o0GGdbafr9GS3lbhzxHP0OonehmcBzSMrJbRCIHPUGkq8S/GWOPqZEJ8+4C/wBJQUsX7elnTdmdT3o7KflOHyd9O/xTrlTbVVX3i++3Z3TP0cJTNR6jDO4ayu/WYALlAUnUC0vcXr1RwBzeW6U+HbrP22PmSZnx+q+XxOTGExxMY09DykMaTFMYYBCEIGohCENEIQgdmyvf8PqJnPtErugVkYqbjUd8ITjr+no+Lx6NsT3X/wB3/iJZNCE6Z8cd/wBVx4iVmJhCUlU4nfK3a37rNx5whNFv0Vru6HOxNqhGvIDdNLThCGJBAwhMarNufuz3H5TH9Fz/AOmf+dU+QhCcdf09Px/yqErNd9ZyYM9Zu5frCEzH9N+X+a6jGGEJ3eQ0xphCA2EIQP/Z"} className="img-fluid img" />
            </Col>
            <Col><p>Denim Jacket</p></Col>
            <Col><p>Blue</p></Col>
            <Col><p>Size: S</p></Col>
            <Col><p>Qty:1</p></Col>
            <Col><p>$27</p></Col>
          </Row>
        </Card>
        </Card.Body>
       </Card.Body>
          </Card>
          </Col>
        </Row>
        </Container>
        </section>
    </div>
  )
}
export default One