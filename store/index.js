export const state = () => ({
	navi: require('~/contents/json/navigation.en.json'),
	company: require('~/contents/json/navigation.en.json'),
	contact: require('~/contents/json/contact_form.en.json'),
})

export const mutations = {
	setNavi (state, navi) {
		state.navi = navi
	},
	setCompany (state, compny) {
		state.company = company
	},
	setContact (state, contact) {
		state.contact = contact
	}
}

export const actions = {
	nuxtServerInit ({ commit }, { params }) {
    if (params.locale !== undefined) {
  	   commit('setNavi', require(`~/contents/json/navigation.${params.locale}.json`))
    }
	}
}
