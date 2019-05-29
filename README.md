#### Requirments

Find requirement [here](https://drive.google.com/file/d/14Yq5ZGAcoOjo_RiPAxdOme0m65J8O1u_/view?usp=sharing)

#### How to run

### Linux

* Run server

1. Download stream server as specified in instruction document.
2. Extract server
3. Download data from: [here][1]
4. Extract data into <server-path>/data/ directory
5. Open terminal
6. Go to project directory
```bash
cd <server-path>/bin
./play_java_websocket_server
```
7. To check that server is live, open browser and go to localhost:9000

* Run client

1. Open terminal
2. Go to project directory
```bash
cd <client-path>
python -m SimpleHTTPServer 3000
```
7. open browser and go to localhost:3000

[1]: https://drive.google.com/file/d/1OeQYIQVRu9lkL3INAm23zK2oq5Dwd_X2/view?usp=sharing