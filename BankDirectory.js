const retailersData = [
    {
        bankName: "Sparebanken Knut",
        "Bankaccounts": [
            { "name": "John", "account": "5301.2105", "balance": 51501, "trans": -5000 },
            { "name": "Bobby", "account": "1150.7647",  "balance": 29000, "trans": 1250  },
            { "name": "Kari ", "account": "4023.5541", "balance": 500, "trans": 13500  },

        ],
        "locations": [
            { "city": "Bergen", "country": "Norway" },
            { "city": "Johannesburg", "country": "South Africa" },
        ]
        
    },
    
]
	
const Retailer = ({ bankName, Bankaccounts, locations }) =>

    <fieldset id={bankName}>        
		<legend>{bankName}</legend>
        
        <h4>Bank locations</h4>
		<ul className="locations">
			{locations.map((bank, i) =>
				<li key={i}>{bank.city}, {bank.country}</li>
			)}

		</ul>
		<h4>Bankaccounts</h4>
		<ul className="Bankaccounts">
            {Bankaccounts.map((product, i) => 
				<li key={i}><u><b>{product.name}</b></u> <br/> Account: {product.account} <br/> Balance: {product.balance},- NOK</li>
            )}
        </ul>
		
		<h4>Transactions</h4>
		<ul className="locations">
			{Bankaccounts.map((trans, i) =>
				<li key={i}><u><b>{trans.name}</b></u> <br/> Latest transaction: {trans.trans},- NOK</li>
			)}
		</ul>
    </fieldset>

const App = ({title, retailers}) =>
    <div>
        <header>
            <h1>{title}</h1>
        </header>
        <div>
            {retailers.map((retailer, i) =>
                <Retailer key={i} {...retailer} />
            )}
        </div>
    </div>

ReactDOM.render(
    <App retailers={retailersData} title="Bank" />,
    document.getElementById("osl-container")
)
