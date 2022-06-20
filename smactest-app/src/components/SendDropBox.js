const dropboxV2Api = require('dropbox-v2-api');

const UploadTo = (props) =>{

    const token = "sl.BIdVscQNE8BrGDd6t359MV2CWrf_i2uIKbDt6JW4CHSLIr4jb2kzSVguKbeNEvUaXvklLXWVYh64WoEGTiAi_nVxUoc-hnOXo2aCZkdb5tzJE3HFX4kv1rhEFg0Iex4QAt_IlO0";
    const tokenV2= "sl.BIjlooeT2D-l6mEXFHVG5zQi5IL4_hcz4TTDbRuseVgZCd1dS9PuEQDUPs57MCf1axk4OvfwAkacaIZ3yUE44u3w4wrkBwDUTSiWW-bOG1DtNNTzzbIWAAO2CzaA_GZl3ogKVoQ";
    const dataAppKey =  "n79dtb4w9cz0fzp";
    const fileshareLink = "https://www.dropbox.com/request/c0TaFsmd719ZdTRKANtJ";

    const dbx = dropV2Api.authenticate({token:tokenV2});
    dbx({token})

    dbx.filesUpload({path: props.file}).then((response) => {console.log(response)}).catch((err) => {console.log(err)});
}
export default UploadTo;