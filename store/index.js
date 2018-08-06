export const state = () => ({
	navi: require('~/contents/json/site_parts/navigation.en.json'),
	company: require('~/contents/json/site_parts/navigation.en.json'),
	contact: require('~/contents/json/site_parts/contact_form.en.json'),
})

export const mutations = {
	setNavi (state, navi) {
		state.navi = navi
	},
	setCompany (state, company) {
		state.company = company
	},
	setContact (state, contact) {
		state.contact = contact
	}
}

export const actions = {
	nuxtServerInit ({ commit }, { params }) {
    if (params.locale !== undefined) {
  	   commit('setNavi', require(`~/contents/json/site_parts/navigation.${params.locale}.json`))
  	   commit('setCompany', require(`~/contents/json/site_parts/company.${params.locale}.json`))
  	   commit('setContact', require(`~/contents/json/site_parts/contact_form.${params.locale}.json`))
    }
	}
}
