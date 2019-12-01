# Give Me Money
**Software Architecture Term Project:** Create Microservice

**Software-Defined System Term Project:** Build the Kubernetes cluster using Raspberry PI with this project

## Project structure
- database
- frontend
- service: Each service has the user for accessing only his database
  - user
    - Get all user information
    - Using `gmm_user` database
  - debt 
    - Get, Create the debt list
    - Using `gmm_debt` database
  - transaction 
    - Get, Create the transaction for paying debt
    - Using `gmm_transaction` database

## Build
For testing in local
- Build image and Create the container 
```sh
docker-compose up -d --build
```
- Open the browser with docker ip. For example, `172.17.0.1` or `localhost`
- Stop and Remove the container
```sh
docker-compose down
```

## Topology
Kubenetes cluster topology 

| Device                                   |             IP Address             |
| ---------------------------------------- | :--------------------------------: |
| Master 1 [VM]                            |                ...                 |
| Master 2 [VM]                            |                ...                 |
| Load Balancer for Master [VM] - HA Proxy |                ...                 |
| Load Balancer for Client [VM] - nginx    |           192.168.0.100            |
| Worker Node [Raspberry PI]               | 192.168.0.136, 192.168.0.142 - 144 |

## Set up Kubernetes cluster

### Set up Worker Node [Raspberry PI]
For Raspbian 10 (Debian 10)

- Swap need to be disbled for kubeadm to run correctly.

```sh
sudo swapoff -a
sudo systemctl disable dphys-swapfile.service
```

- Since latest kubeadm is not compatible with nftables, we have to change it to use legacy iptables. [See more detail](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#ensure-iptables-tooling-does-not-use-the-nftables-backend)

```sh
sudo apt install arptables

sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
sudo update-alternatives --set arptables /usr/sbin/arptables-legacy
sudo update-alternatives --set ebtables /usr/sbin/ebtables-legacy
```

### Set up Master Node

### Set up Load Balancer for master - HAProxy

### Set up Load Balancer for client - nginx
1. Choose the VM in the notebook. For the VM, you can use whatever you would like such as Ubuntu or Debian
2. After selecting the VM in the VirtualBox, Go to `Settings > Network`. At the `Attached to:` in Adapter 1, Select `Bridged Adapter`
3. Install nginx
```sh
sudo apt-get update
sudo apt-get install nginx
```
4. In this project root directory, copy `nginx.conf` to `/etc/nginx/nginx.conf`
5. Remove the default symbolic link in site-enabled folder
```sh
sudo rm /etc/nginx/sites-enabled/default
```
6. Restart nginx
```sh
sudo systemctl restart nginx
```

## Deploy the application to Kubernetes cluster