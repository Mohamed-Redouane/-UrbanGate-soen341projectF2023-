//references: How to use HashSet : https://www.npmjs.com/package/hashset
// How to use promise "https://dmitripavlutin.com/promise-all/"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "./ManageOffersRequests.css";

function  ManageOffersRequests() {
  const { propertyId } = useParams();
  const [Offers, setOffers] = useState<{
    _id: string,
    property: string;
    requester: string;
    amount: String;
    Status: string;
    requestedDate: string;
  }[]>([]);

  useEffect(() => {
    //get user id (broker id) from localStorage
    const brokerId = localStorage.getItem("UserID");
// Create a Set to store unique keys
const uniqueKeysSet = new Set(); // https://www.npmjs.com/package/hashset
    //get Properties related to broker id
    axios.get(`http://localhost:3000/readPropertiesForUser/${brokerId}`)
      .then(async (response) => {
        console.log(response.data);
        if (response.data) {
          const properties = response.data;
          //get visit requests for each property
          const promises = properties.map((property: { propertyId: any }) => // https://dmitripavlutin.com/promise-all/
            axios.get(`http://localhost:3000/manageOffersRequests/${brokerId}`)
              .then((offersRequestsResponse) => offersRequestsResponse.data)
              .catch((error) => {
                console.error(error);
                return [];
              })
          );
  
          Promise.all(promises)
            .then((offersRequestsForProperties) => {
              // Flatten the array of visit requests
              const allOffersRequests = offersRequestsForProperties.flat();
              
              // Filter out duplicates before setting state
              const filteredOffersRequests = allOffersRequests.filter(request => {
                const key = `${request._id}-${request.property}-${request.requester}`;
                if (uniqueKeysSet.has(key)) {
                  return false; // Skip duplicates
                } //
                uniqueKeysSet.add(key); // Add unique keys to the Set
                return true;
              });
              setOffers(filteredOffersRequests);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          console.log("No data found for these properties.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="visit-requests-container">
      <h1 className="visit-requests-heading">Offers</h1>
      {Offers.length === 0 ? (
        <p className="no-requests-message">There are no Offers.</p>
      ) : (
        <ul className="visit-request-list">
          {Offers.map((request) => ( //
            <li key={`${request._id}-${request.property}-${request.requester}`}>
             <div className="visit-card">
                <div className="visit-card-body">
                  <p>property: {request.property}</p>
                  <p>requester: {request.requester}</p>
                  <p>amount: ${request.amount}</p>
                  <p>Status: {request.Status}</p>
                  <p>Requested Date: {request.requestedDate}</p>
                  <div className="visit-details-button">
                     <button className="btn btn-secondary text-white">
                      <Link to={`/manageOffersRequests/AcceptOfferRequest/${request._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                        Accept
                      </Link>
                    </button>
                    <button className="btn btn-secondary text-white">
                      <Link to={`/manageOffersRequests/RejectOfferRequest/${request._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                        Reject
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ManageOffersRequests;
