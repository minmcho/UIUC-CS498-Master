<script src='https://d3js.org/d3.v5.min.js'>


       const cashinfo{
    "Credit":"Credit",
        "WIC":"WIC",
        "WICash":"WICash",

}
         const cashinfo ={

             "MarketName":"Marketname"
             "Region": "usregion",
             "City":  "City",
             "County": "County",
             "State": "State",
             "Zip": "Zip",
             "X" :"x",
             "Y": "y",
             "Credit":"Credit",
             "WIC":"WIC",
             "WICash":"WICash",
         }


        const productinfo = {
            "MarketName":"Marketname"
            "Region": "usregion",

            "City":  "City",
            "County": "County",
            "State": "State",
            "Zip": "Zip",
            "X" :"x",
            "Y": "y",
            "SeaFood":"SeaFood",
            "Cheese":"Cheese",
            "Credit":"Credit",
            "WIC":"WIC",
            "WICash":"WICash",
            "SeniorFarmerNutrionPrgram":"SFMNP",
            "NutritionAssistanceProgram":"SNAP",
            "Organic":"Organic",
            "Craft":"Craft",
            "Flowers":"Flowers",
            "Eggs":"Eggs",
            "SeaFood":"SeaFood",
            "Herbs":"Herbs",
            "Bakedgoods":"Bakedgoods",
            "Vegetable":"Vegetables",
            "Honey":"Honey",
            "Jams":"Jams",
            "Meat":"Meat",
            "Nursery": "Nursery",
            "Plants":"Plants",
            "Prepared":"Prepared",
            "Soap":"Soap",
            "Fruits":"Fruits",
            "Grains":"Grains",
            "Juices":"Junices",
            "Mushrooms":"Mushrooms",
            "PetFood":"PetFood",
            "Tofu":"Tofu",
            "WildHarvest"

        }

        const marketinfo  = {
            "MarketName":"Marketname"
            "Region": "usregion",

            "City":  "City",
            "County": "County",
            "State": "State",
            "Zip": "Zip",
            "X" :"x",
            "Y": "y",
            "SeaFood":"SeaFood",
            "Cheese":"Cheese",
            "Credit":"Credit",
            "WIC":"WIC",
            "WICash":"WICash",
            "SFMNP":"SFMNP",
            "SNAP":"SNAP",
            "Organic":"Organic",
            "Craft":"Craft",
            "Flowers":"Flowers",
            "Eggs":"Eggs",
            "SeaFood":"SeaFood",
            "Herbs":"Herbs",
            "Bakedgoods":"Bakedgoods",
            "Vegetable":"Vegetables",
            "Honey":"Honey",
            "Jams":"Jams",
            "Meat":"Meat",
            "Nursery": "Nursery",
            "Plants":"Plants",
            "Prepared":"Prepared",
            "Soap":"Soap",
            "Fruits":"Fruits",
            "Grains":"Grains",
            "Juices":"Junices",
            "Mushrooms":"Mushrooms",
            "PetFood":"PetFood",
            "Tofu":"Tofu",
            "WildHarvest"



    };

async function loaddata()
{
    const data = await d3.csv("farmersmarket.csv" ,function(d)
        {



        }

    );


}