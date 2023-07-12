import { render } from "@testing-library/react"
import HeaderLayout from "../Header"
import { Provider } from "react-redux"
import Store from "../../utill/storeCollection/Store"
import { StaticRouter } from 'react-router-dom/server'

test("Load should logo on rendering hearder", () => {
    const header =  render(
        <StaticRouter>
            <Provider store={Store}>
                <HeaderLayout/>
            </Provider>
        </StaticRouter>
    );
    const getLogo = header.getAllByTestId('logoId');
    expect(getLogo[0].src).toBe('http://localhost/dummy.png');
})

test("Cart should logo on rendering hearder", () => {
    const header =  render(
        <StaticRouter>
            <Provider store={Store}>
                <HeaderLayout/>
            </Provider>
        </StaticRouter>
    );
    const getCart = header.getByTestId('cartID');
    expect(getCart.innerHTML).toBe('Cart - 0 Items');
})

