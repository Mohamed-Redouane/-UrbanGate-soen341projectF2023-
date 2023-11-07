//references: How to use HashSet : https://www.npmjs.com/package/hashset
// How to use promise "https://dmitripavlutin.com/promise-all/"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "./ManageVisitRequests.css";

function ManageVisitRequests() {
  const { propertyId } = useParams();
  const [visitRequests, setVisitRequests] = useState<{
    _id: string,
    property: string;
    requester: string;
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
            axios.get(`http://localhost:3000/manageVisitRequests/${brokerId}`)
              .then((visitRequestsResponse) => visitRequestsResponse.data)
              .catch((error) => {
                console.error(error);
                return [];
              })
          );
  
          Promise.all(promises)
            .then((visitRequestsForProperties) => {
              // Flatten the array of visit requests
              const allVisitRequests = visitRequestsForProperties.flat();
              
              // Filter out duplicates before setting state
              const filteredVisitRequests = allVisitRequests.filter(request => {
                const key = `${request._id}-${request.property}-${request.requester}`;
                if (uniqueKeysSet.has(key)) {
                  return false; // Skip duplicates
                } //
                uniqueKeysSet.add(key); // Add unique keys to the Set
                return true;
              });
              setVisitRequests(filteredVisitRequests);
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
      <h1 className="visit-requests-heading">Visit Requests</h1>
      {visitRequests.length === 0 ? (
        <p className="no-requests-message">There are no visit requests.</p>
      ) : (
        <ul className="visit-request-list">
          {visitRequests.map((request) => ( //
            <li key={`${request._id}-${request.property}-${request.requester}`}>
             <div className="visit-card">
                <div className="visit-card-body">
                  <p>property: {request.property}</p>
                  <p>requester: {request.requester}</p>
                  <p>Status: {request.Status}</p>
                  <p>Requested Date: {request.requestedDate}</p>
                  <div className="visit-details-button">
                     <button className="btn btn-secondary text-white">
                      <Link to={`/broker/manageVisitRequests/AcceptVisitRequest/${request._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
                        Accept
                      </Link>
                    </button>
                    <button className="btn btn-secondary text-white">
                      <Link to={`/broker/manageVisitRequests/RejectVisitRequest/${request._id}`} style={{ textDecoration: "none", color: "white", fontSize: "14px" }}>
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

export default ManageVisitRequests;
