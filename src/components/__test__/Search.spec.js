const { render } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { StaticRouter } = require("react-router-dom/server");
const Store = require("../../utill/storeCollection/Store");
const Body = require("../Body");
const { RESTAURANT_DATA } = require("../../mocks/data");

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA);
        }
    })
})

test("Search intigration testing", () => {
    const body = render(
        <StaticRouter>
            <Provider store={Store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    console.log(body)
});