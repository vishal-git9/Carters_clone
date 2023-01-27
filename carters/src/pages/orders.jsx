import { getOrderProducts } from "@/redux/orders/orders.action";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBProgress,
  MDBProgressBar,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Head from "next/head";
import React, { useEffect } from "react";
import { Spinner,Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { OrderItemCard } from "@/components/orderCard";
import { getCartProducts } from "@/redux/cart/cart.actions";
import { getLiveUser } from "@/redux/Authentication/Auth.action";
import { useRouter } from "next/router";
import { useAuth } from "@/Hooks/useAuth";
export default function OrderDetails3() {
  const orderData = useSelector((store) => store.orderData.Orders);
  const loading = useSelector((store) => store.orderData.loading);
  const router = useRouter()
  const AuthData = useSelector((store) => store.AuthUser.loginData);
  const isAuth = useAuth()
  console.log(isAuth)
  const dispatch = useDispatch();
  
  let Total = 0
  const discount = 19
    orderData?.forEach((el) => {
      Total+= el.price*el.quantity
    });
    const GST = Math.floor((Total*18)/100)
    const  totalPaid = Total+GST-discount
    const payable = totalPaid.toFixed(2)
  useEffect(() => {
    if(!isAuth){
      router.push("/Signup")
    }
    dispatch(getOrderProducts());
    dispatch(getCartProducts())
  }, [dispatch]);
  return (
    <>
    <Head>
        <title>Orders</title>
        <meta name="description" content="user orders page " />
      </Head>
      {!loading?(<section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="10" xl="8">
              <MDBCard style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-4 py-5">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    Thanks for your Order,{" "}
                    <span style={{ color: "#a8729a",fontWeight:"bold",textTransform:"capitalize" }}>{isAuth?AuthData[0].firstName:""}</span>!
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p
                      className="lead fw-normal mb-0"
                      style={{ color: "#a8729a" }}
                    >
                      Receipt
                    </p>
                    <p className="small text-muted mb-0">
                      Receipt Voucher : 1KAU9-84UIL
                    </p>
                  </div>
                  {orderData?.map((item) => (
                    <OrderItemCard key={item.id} {...item} />
                  ))}
                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Total</span> ${Total}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Invoice Number : 788152</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Discount</span> $19.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Invoice Date : 22 Dec,2019
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST 18%</span> ${GST}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">
                      Recepits Voucher : 18KU-62IIK
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Delivery Charges</span>{" "}
                      Free
                    </p>
                  </div>
                </MDBCardBody>
                <MDBCardFooter
                  className="border-0 px-4 py-5"
                  style={{
                    backgroundColor: "#4299E1",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <MDBTypography
                    tag="h5"
                    className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                  >
                    Total paid: <span className="h2 mb-0 ms-2">${payable}</span>
                  </MDBTypography>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>):(
        <Stack mt="160px" justifyContent={"center"} alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Stack>
      )}
    </>
  );
}
