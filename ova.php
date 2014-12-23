

<config>
   <ova.title>
       Delivering Text Overlay Ads
   </ova.title>
   <ova.json>
{
    "debug": { "levels": "fatal" },
    "canFireEventAPICalls": true,
    "ads": {
         "skipAd": {
             "enabled": true,
             "showAfterSeconds": 15,
             "minimumAdDuration": 30
         },
         "schedule": [ 
             {
                  "position": "pre-roll",
                  "tag":"http://delivery.vidible.tv/placement/vast/5176d880e4b082c657f08a4a/54032168e4b0dba7506dc2a5?bcid=5176c647e4b09e5e67af5b27"
             } 
         ]
    }
}
   </ova.json>
</config>



