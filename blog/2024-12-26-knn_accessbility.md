---
slug: knn_accessibility
title: KNN Accessibility
authors: kaihu
---


### KNNA (KNN Accessibility Score)

$$
KNNA[i]^{r} = \sum_{ j \in G-\{i\} , d[i,j] \leq r } \frac {W[j]*C_k}{e^{\beta*max(d[i,j]-plateau,0)}}
$$


- $d[i,j]$ is the lowest-cost path distance between origin $i$ and destination $j$ in network $G$.
- $W[j]$ is the weight of destination j, and the function of distance between i and j in the denominator represents an exponential distance decay rate that is controlled  by parameter $\beta$.
- $C_k$ is a predefined coefficient for the K-th nearest destination, given in an array of the form [0.5, ..., 0.1]. For example, a white paper published by WalkScore. uses the following arrays for each type of commercial amenity:  

```python
amenity_weight = {  
"grocery": [3],  
"restaurants": [.75, .45, .25, .25, .225,  
.225, .225, .225, .2, .2],  
"shopping": [.5, .45, .4, .35, .3],  
"coffee": [1.25, .75],  
"banks": [1],
}
```

- We have added an optional  $plateau$ radius (e.g. 400 meters) to the index: a  baseline distance from origin i in which no distance decay is applied and destinations contribute their full weights towards the index. This allows treating all nearby destinations as equally accessible. The $plateau$ radius can be set to zero to ensure that distance decay is always included. If the $plateau$ distance is greater than or equal to the search radius, it has no effect.


$$ 
KNNA[i]^{r} = \sum_{ j \in G-\{i\} , d[i,j] \leq r } \frac {W[j]*C_k}{e^{\beta*max(d[i,j]-plateau,0)}}  
$$



```python
# https://github.com/City-Form-Lab/madina/blob/main/src/madina/una/betweenness.py
knn_weight = 0
	for neighbor_weight, neighbor_distance in zip(self.network.knn_weight,d_idxs.values()):
if neighbor_distance < self.network.knn_plateau:
	knn_weight += neighbor_weight
else:
	knn_weight += neighbor_weight / pow(math.e, (beta * (neighbor_distance-self.network.knn_plateau)))
```

<!-- truncate -->