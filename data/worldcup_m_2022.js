const { localeName } = require("./helpers")

const matchData = (lang) => {
	return {
	"groups": {
		"A": [
			{
				"teams": ["QA", "EC"],
				"goals": [0, 2],
				"fairPlay": [4, 2],
				"date": "2022-11-20T16:00:00Z"
			},
			{
				"teams": ["SN", "NL"],
				"goals": [0, 2],
				"fairPlay": [2, 1],
				"date": "2022-11-21T16:00:00Z"
			},
			{
				"teams": ["QA", "SN"],
				"goals": [1, 3],
				"fairPlay": [3, 3],
				"date": "2022-11-25T13:00:00Z"
			},
			{
				"teams": ["NL", "EC"],
				"goals": [1, 1],
				"fairPlay": [0, 1],
				"date": "2022-11-15T16:00:00Z"
			},
			{
				"teams": ["NL", "QA"],
				"goals": [2, 0],
				"fairPlay": [1, 0],
				"date": "2022-11-29T15:00:00Z"
			},
			{
				"teams": ["EC", "SN"],
				"goals": [1, 2],
				"fairPlay": [0, 1],
				"date": "2022-11-29T15:00:00Z"
			}
		],
		"B": [
			{
				"teams": ["GB-ENG", "IR"],
				"goals": [6, 2],
				"fairPlay": [0, 2],
				"date": "2022-11-21T13:00:00Z"
			},
			{
				"teams": ["US", "GB-WLS"],
				"goals": [1, 1],
				"fairPlay": [4, 2],
				"date": "2022-11-21T19:00:00Z"
			},
			{
				"teams": ["GB-WLS", "IR"],
				"goals": [0, 2],
				"fairPlay": [4, 2],
				"date": "2022-11-25T10:00:00Z"
			},
			{
				"teams": ["GB-ENG", "US"],
				"goals": [0, 0],
				"fairPlay": [0, 0],
				"date": "2022-11-25T19:00:00Z"
			},
			{
				"teams": ["GB-WLS", "GB-ENG"],
				"goals": [0, 3],
				"fairPlay": [2, 0],
				"date": "2022-11-29T19:00:00Z"
			},
			{
				"teams": ["IR", "US"],
				"goals": [0, 1],
				"fairPlay": [3, 1],
				"date": "2022-11-29T19:00:00Z"
			}
		],
		"C": [
			{
				"teams": ["AR", "SA"],
				"goals": [1, 2],
				"fairPlay": [0, 6],
				"date": "2022-11-22T10:00:00Z"
			},
			{
				"teams": ["MX", "PL"],
				"goals": [0, 0],
				"fairPlay": [2, 1],
				"date": "2022-11-22T16:00:00Z"
			},
			{
				"teams": ["PL", "SA"],
				"goals": [2, 0],
				"fairPlay": [3, 3],
				"date": "2022-11-26T13:00:00Z"
			},
			{
				"teams": ["AR", "MX"],
				"goals": [2, 0],
				"fairPlay": [1, 4],
				"date": "2022-11-26T19:00:00Z"
			},
			{
				"teams": ["PL", "AR"],
				"goals": [0, 2],
				"fairPlay": [1, 1],
				"date": "2022-11-30T19:00:00Z"
			},
			{
				"teams": ["SA", "MX"],
				"goals": [1, 2],
				"fairPlay": [6, 1],
				"date": "2022-11-30T19:00:00Z"
			}
		],
		"D": [
			{
				"teams": ["DK", "TN"],
				"goals": [0, 0],
				"fairPlay": [2, 1],
				"date": "2022-11-22T13:00:00Z"
			},
			{
				"teams": ["FR", "AU"],
				"goals": [4, 1],
				"fairPlay": [0, 3],
				"date": "2022-11-22T19:00:00Z"
			},
			{
				"teams": ["TN", "AU"],
				"goals": [0, 1],
				"fairPlay": [3, 0],
				"date": "2022-11-26T10:00:00Z"
			},
			{
				"teams": ["FR", "DK"],
				"goals": [2, 1],
				"fairPlay": [1, 2],
				"date": "2022-11-26T16:00:00Z"
			},
			{
				"teams": ["TN", "FR"],
				"goals": [1, 0],
				"fairPlay": [1, 0],
				"date": "2022-11-30T15:00:00Z"
			},
			{
				"teams": ["AU", "DK"],
				"goals": [1, 0],
				"fairPlay": [2, 1],
				"date": "2022-11-30T15:00:00Z"
			}
		],
		"E": [
			{
				"teams": ["DE", "JP"],
				"goals": [1, 2],
				"fairPlay": [0, 0],
				"date": "2022-11-23T13:00:00Z"
			},
			{
				"teams": ["ES", "CR"],
				"goals": [7, 0],
				"fairPlay": [0, 2],
				"date": "2022-11-23T16:00:00Z"
			},
			{
				"teams": ["JP", "CR"],
				"goals": [0, 1],
				"fairPlay": [3, 3],
				"date": "2022-11-27T10:00:00Z"
			},
			{
				"teams": ["ES", "DE"],
				"goals": [1, 1],
				"fairPlay": [1, 3],
				"date": "2022-11-27T19:00:00Z"
			},
			{
				"teams": ["JP", "ES"],
				"goals": [2, 1],
				"fairPlay": [3, 0],
				"date": "2022-12-01T19:00:00Z"
			},
			{
				"teams": ["CR", "DE"],
				"goals": [2, 4],
				"fairPlay": [1, 0],
				"date": "2022-12-01T19:00:00Z"
			}
		],
		"F": [
			{
				"teams": ["MA", "HR"],
				"goals": [0, 0],
				"fairPlay": [1, 0],
				"date": "2022-11-23T10:00:00Z"
			},
			{
				"teams": ["BE", "CA"],
				"goals": [1, 0],
				"fairPlay": [3, 2],
				"date": "2022-11-23T19:00:00Z"
			},
			{
				"teams": ["BE", "MA"],
				"goals": [0, 2],
				"fairPlay": [1, 1],
				"date": "2022-11-27T13:00:00Z"
			},
			{
				"teams": ["HR", "CA"],
				"goals": [4, 1],
				"fairPlay": [2, 2],
				"date": "2022-11-27T16:00:00Z"
			},
			{
				"teams": ["HR", "BE"],
				"goals": [0, 0],
				"fairPlay": [0, 1],
				"date": "2022-12-01T16:00:00Z"
			},
			{
				"teams": ["CA", "MA"],
				"goals": [1, 2],
				"fairPlay": [4, 0],
				"date": "2022-12-01T16:00:00Z"
			}
		],
		"G": [
			{
				"teams": ["CH", "CM"],
				"goals": [1, 0],
				"fairPlay": [2, 1],
				"date": "2022-12-24T10:00:00Z"
			},
			{
				"teams": ["BR", "RS"],
				"goals": [2, 0],
				"fairPlay": [0, 3],
				"date": "2022-12-24T19:00:00Z"
			},
			{
				"teams": ["CM", "RS"],
				"goals": [3, 3],
				"fairPlay": [2, 2],
				"date": "2022-11-28T10:00:00Z"
			},
			{
				"teams": ["BR", "CH"],
				"goals": [1, 0],
				"fairPlay": [1, 1],
				"date": "2022-11-28T16:00:00Z"
			},
			{
				"teams": ["CM", "BR"],
				"goals": [1, 0],
				"fairPlay": [5, 2],
				"date": "2022-12-02T19:00:00Z"
			},
			{
				"teams": ["RS", "CH"],
				"goals": [2, 3],
				"fairPlay": [6, 4],
				"date": "2022-12-02T19:00:00Z"
			}
		],
		"H": [
			{
				"teams": ["UY", "KR"],
				"goals": [0, 0],
				"fairPlay": [1, 1],
				"date": "2022-11-24T13:00:00Z"
			},
			{
				"teams": ["PT", "GH"],
				"goals": [3, 2],
				"fairPlay": [2, 4],
				"date": "2022-11-24T16:00:00Z"
			},
			{
				"teams": ["KR", "GH"],
				"goals": [2, 3],
				"fairPlay": [5, 2],
				"date": "2022-11-28T13:00:00Z"
			},
			{
				"teams": ["PT", "UY"],
				"goals": [2, 0],
				"fairPlay": [3, 2],
				"date": "2022-11-28T19:00:00Z"
			},
			{
				"teams": ["KR", "PT"],
				"goals": [2, 1],
				"fairPlay": [2, 0],
				"date": "2022-12-02T15:00:00Z"
			},
			{
				"teams": ["GH", "UY"],
				"goals": [0, 2],
				"fairPlay": [2, 4],
				"date": "2022-12-02T15:00:00Z"
			}
		]
	},
	"AF": [
		{
			"goals": [3, 1],
			"add": null,
			"date": "2022-12-03T15:00:00Z"
		},
		{
			"goals": [2, 1],
			"add": null,
			"date": "2022-12-03T19:00:00Z"
		},
		{
			"goals": [3, 1],
			"add": null,
			"date": "2022-12-05T15:00:00Z"
		},
		{
			"goals": [3, 0],
			"add": null,
			"date": "2022-12-05T19:00:00Z"
		},
		{
			"goals": [1, 3],
			"add": `${localeName("Penalties", lang)}, 1:1 (1:1) ${localeName("ExtraTime", lang)}`,
			"date": "2022-12-04T19:00:00Z"
		},
		{
			"goals": [4, 1],
			"add": null,
			"date": "2022-12-04T15:00:00Z"
		},
		{
			"goals": [3, 0],
			"add": `${localeName("Penalties", lang)}, 0:0 (0:0) ${localeName("ExtraTime", lang)}`,
			"date": "2022-12-06T15:00:00Z"
		},
		{
			"goals": [0, 1],
			"add": null,
			"date": "2022-12-06T19:00:00Z"
		}
	],
	"VF": [
		{
			"goals": [4, 2],
			"add": `${localeName("Penalties")}, 1:1 (0:0) ${localeName("ExtraTime")}`,
			"date": "2022-12-09T19:00:00Z"
		},
		{
			"goals": [3, 4],
			"add": `${localeName("Penalties")}, 2:2 (2:2) ${localeName("ExtraTime")}`,
			"date": "2022-12-10T19:00:00Z"
		},
		{
			"goals": [1, 0],
			"add": null,
			"date": "2022-12-09T15:00:00Z"
		},
		{
			"goals": [1, 2],
			"add": null,
			"date": "2022-12-10T15:00:00Z"
		}
	],
	"HF": [
		{
			"goals": [3, 0],
			"add": null,
			"date": "2022-12-13T19:00:00Z"
		},
		{
			"goals": [2, 0],
			"add": null,
			"date": "2022-12-14T19:00:00Z"
		}
	],
	"3P": {
		"goals": [2, 1],
		"add": null,
		"date": "2022-12-17T15:00:00Z"
	},
	"F": {
		"goals": [4, 2],
		"add": `${localeName("Penalties")}, 3:3 (2:2) ${localeName("ExtraTime")}`,
		"date": "2022-12-18T15:00:00Z"
	}
}
}

module.exports = matchData;
