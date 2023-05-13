import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

const data = [
    {
        "id": "1",
        "name": "Metro Manila",
        "parent": null
    },
    {
        "id": "101",
        "name": "Manila",
        "parent": "1"
    },
    {
        "id": "10101",
        "name": "Malate",
        "parent": "101"
    },
    {
        "id": "10102",
        "name": "Ermita",
        "parent": "101"
    },
    {
        "id": "10103",
        "name": "Binondo",
        "parent": "101"
    },
    {
        "id": "102",
        "name": "Makati",
        "parent": "1"
    },
    {
        "id": "10201",
        "name": "Poblacion",
        "parent": "102"
    },
    {
        "id": "10202",
        "name": "Bel-Air",
        "parent": "102"
    },
    {
        "id": "10203",
        "name": "San Lorenzo",
        "parent": "102"
    },
    {
        "id": "10204",
        "name": "Urdaneta",
        "parent": "102"
    },
    {
        "id": "103",
        "name": "Marikina",
        "parent": "1"
    },
    {
        "id": "10301",
        "name": "Sto Nino",
        "parent": "103"
    },
    {
        "id": "10302",
        "name": "Malanday",
        "parent": "103"
    },
    {
        "id": "10303",
        "name": "Concepcion I",
        "parent": "103"
    },
    {
        "id": "2",
        "name": "CALABARZON",
        "parent": null
    },
    {
        "id": "201",
        "name": "Laguna",
        "parent": "2"
    },
    {
        "id": "20101",
        "name": "Calamba",
        "parent": "201"
    },
    {
        "id": "20102",
        "name": "Sta. Rosa",
        "parent": "201"
    },
    {
        "id": "202",
        "name": "Cavite",
        "parent": "2"
    },
    {
        "id": "20201",
        "name": "Kawit",
        "parent": "202"
    },
    {
        "id": "203",
        "name": "Batangas",
        "parent": "2"
    },
    {
        "id": "20301",
        "name": "Lipa",
        "parent": "203"
    },
    {
        "id": "20302",
        "name": "Tanauan",
        "parent": "203"
    },
    {
        "id": "3",
        "name": "Central Luzon",
        "parent": null
    },
    {
        "id": "301",
        "name": "Bulacan",
        "parent": "3"
    },
    {
        "id": "302",
        "name": "Nueva Ecija",
        "parent": "3"
    },
    {
        "id": "303",
        "name": "Tarlac",
        "parent": "3"
    },
    {
        "id": "304",
        "name": "Pampanga",
        "parent": "3"
    }
];

function Home() {
    // **Get api external call**

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get("https://netzwelt-devtest.azurewebsites.net/Territories/All", {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json',
    //         }
    //     }).then((res) => {
    //         setData(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, []);

    const renderChildTree = (ctr, items = []) => {
        let nodeCtr = ctr + 1;
        const treeItems = [];
        for (const item of items) {
            treeItems.push(
                <TreeItem key={item.id} nodeId={nodeCtr.toString()} label={item.name}>
                    {renderChildTree(items.length + (ctr + 1), data.filter(_item => (typeof _item.parent !== 'undefined' && _item.parent === item.id)))}
                </TreeItem >
            )
            nodeCtr = nodeCtr + 1;
        }

        return treeItems;
    }

    const renderTreeItem = () => {
        const treeItems = [];
        const parents = data.filter(item => !item.parent);
        let nodeCtr = parents.length;
        for (const item of parents) {
            treeItems.push(
                <TreeItem key={item.id} nodeId={nodeCtr.toString()} label={item.name}>
                    {renderChildTree(nodeCtr, data.filter(_item => (typeof _item.parent !== 'undefined' && _item.parent === item.id)))}
                </TreeItem>
            )
            nodeCtr += 1;
        }
        return treeItems;
    }

    return (
        <div className="Home">
            <header className="Home-header">
                <h2>Territories</h2>
                <label>Here are the list of territories</label>
                <TreeView
                    aria-label="rich object"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpanded={['root']}
                    defaultExpandIcon={<ChevronRightIcon />}
                    sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto', mt: '10px' }}
                >
                    {renderTreeItem(data)}
                </TreeView>
            </header>
        </div>
    );
}

export default Home;