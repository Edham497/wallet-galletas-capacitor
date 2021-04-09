import bitsoApi from "../../api/bitso_api"
// import { Plugins } from "@capacitor/core";
// const { Storage } = Plugins;

export const wallet = {
    namespaced: true,
    state: {
        timer: null,
        balance_general: 0.0,
        ganancia: 0.0,
        inversion: 0.0,
        books: {
            btc: null,
            eth: null,
            xrp: null,
            ltc: null,
            bch: null,
            usd: null,
            mana: null,
        },
        wallet: {
            btc:  null,
            eth: null,
            xrp: null,
            ltc: { price: "2670.00", cant: 1.16754119 },
            bch: null,
            usd: null,
            mana: { price: "3.00", cant: 331.91541667 },
        },
        _portfolio: []
    },
    mutations: {
        setCoinValue(state, coin) {
            const { high, last, low } = coin.payload

            if (!state.books[coin.coin]) {
                state.books[coin.coin] = { name: coin.coin, value: null }
            }

            state.books[coin.coin].value = { last, high, low }
            // console.log('setCoinValue: ', state.books[coin.coin])
        },
        calcularRendimiento(state) {
            state.ganancia = 0
            state.balance_general = 0
            state.inversion = 0

            for (const coin in state.wallet) {
                if (state.wallet[coin]) {
                    const { cant, price } = state.wallet[coin]
                    const { last } = state.books[coin].value
                    const monto = cant * price
                    state.inversion += monto
                    const monto_actual = cant * last
                    state.balance_general += monto_actual
                    const ganancia = monto_actual - monto
                    state.ganancia += ganancia
                }
            }

            // Object.keys(state.wallet).forEach(coin => {
            //     if (state.wallet[coin]) {
            //         const { cant, price } = state.wallet[coin]
            //         const { last } = state.books[coin].value
            //         const monto = cant * price
            //         state.inversion += monto
            //         const monto_actual = cant * last
            //         state.balance_general += monto_actual
            //         const ganancia = monto_actual - monto
            //         // console.log('rendimiento_' + coin + ":", cant, price, last)
            //         // console.log('ganancia_' + coin + ":", ganancia)
            //         state.ganancia += ganancia
            //     }
            // })
        }
    },
    actions: {
        async getCoin({ commit }, coin) {
            commit('setCoinValue', {
                coin,
                payload: await bitsoApi.get_coin(coin)
            })
        },
        async load_books({ state, dispatch }) {
            for (const coin in state.wallet) {
                if (state.wallet[coin]) {
                    await dispatch('getCoin', coin)
                }
            }
        },
        async init_load({ state, dispatch, commit }) {
            await dispatch('load_books')
            commit('calcularRendimiento')
            if (!state.timer) {
                state.timer = setInterval(async () => {
                    await dispatch('load_books')
                    commit('calcularRendimiento')
                }, 5000)
            }
        }
    },
    getters: {
        // rendimiento: state => {
        //     Object.keys(state.wallet).forEach(coin => {
        //         if (state.wallet[coin]) {
        //             console.log(state.wallet[coin])
        //         }
        //     })
        //     return 'rendimiento'
        // }
        balance_total: state => {
            return Number.parseFloat(state.balance_general).toFixed(2);
        },
        ganancia_total: state => {
            return Number.parseFloat(state.ganancia).toFixed(2);
        },
        inversion_total: state => {
            return Number.parseFloat(state.inversion).toFixed(2);
        },
        portafolio: state => {
            let portfolio = []
            Object.keys(state.wallet).forEach(coin => {
                if (state.wallet[coin] && state.books[coin]) {
                    const { last, high, low } = state.books[coin].value
                    const { cant } = state.wallet[coin]
                    portfolio.push({ name: coin.toUpperCase(), last, high, low, cant })
                }
            })
            return portfolio
        },
        porcentajes: state => {
            let porcentajes = []
            try {
                for (const book in state.wallet) {
                    // console.log(book)
                    if (state.wallet[book] && state.books[book]) {
                        const value = state.books[book].value.last * state.wallet[book].cant
                        const porcentaje = value * 100 / state.balance_general
                        porcentajes.push({ coin: book.toUpperCase(), cant: Number.parseFloat(porcentaje).toFixed(2) })
                    }
                }
                return porcentajes;
            } catch (e) {
                return null
            }
            // try {
            //     const total = state.balance_general
            //     const porcentaje1 = Number.parseFloat((state.books.ltc.value.last * state.wallet.ltc.cant) * 100 / total).toFixed(2);
            //     const porcentaje2 = Number.parseFloat((state.books.mana.value.last * state.wallet.mana.cant) * 100 / total).toFixed(2);
            //     return [{ coin: 'ltc'.toUpperCase(), cant: porcentaje1 }, { coin: 'mana'.toUpperCase(), cant: porcentaje2 }]
            // } catch (e) {
            //     return null
            // }
        },
        books: state => {
            let books = []
            for (const book in state.books) {
                if (state.books[book]) {
                    books.push(state.books[book])
                }
            }
            return books
        }
        // mana_price: state => {
        //     if (state.books.mana) {
        //         const { last, high, low } = state.books.mana.value
        //         const { cant } = state.wallet.mana
        //         return { name: 'MANA', last, high, low, cant }
        //     } else return null
        // },
        // ltc_price: state => {
        //     if (state.books.ltc) {
        //         const { last, high, low } = state.books.ltc.value
        //         const { cant } = state.wallet.ltc
        //         return { name: 'Litecoin', last, high, low, cant }
        //     } else return null
        // },
    }
}

// function format_MXN(){

// }