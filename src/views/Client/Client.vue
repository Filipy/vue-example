<template src="./Client.html"></template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import {ClientModel} from './models/clients.model'
import axios from 'axios';
import HttpClient from '@/core/http-client';
@Component({})
export default class Client extends Vue {
private v: any = new Vue();

public clientModel: ClientModel = new ClientModel();

public httpClient =  HttpClient('client');

public clients:ClientModel [] = [];

public fields: any [] = ['code', 'name', 'address','phone','status','Ações'];

public options: any [] = [
          { value: '1', text: 'Ativo' },
          { value: '2', text: 'Excluido' },
          { value: '3', text: 'Desativado'}
    ]

    created(){
        this.getAll();
        setTimeout(() => {
            debugger;
            this.getAll();
            this.getAll();
            this.getAll();
            this.getAll();
        }, 3000);
    }


    public showModal() {
        (this.$refs['my-modal'] as any).show();
    }

    public save(){
        if(this.clientModel.id > 0) {
            this.httpClient.put('',this.clientModel)
                .then(e => {
                    this.getAll();
                    this.hideModal();
                }).catch(e => {
            })
        } else{
            this.httpClient.post('',this.clientModel)
                .then(e => {
                    this.getAll();
                    this.hideModal();
                }).catch(e => {
    
                })
        }
    }

    public status(id: number ){
        if(id == 1){
            return 'Ativo'
        } else if( id == 2){
            return 'Excluido';
        } else if( id == 3){
            return "Desativado";
        }
        return '';
    }

    public editOpen(client: ClientModel) {
        this.clientModel =  Object.assign({}, client);
        this.showModal();
    }

    public getAll() {
        this.httpClient.get()
            .then(e => {
                this.clients = e.data.result;
            }).catch(e =>{
            });
    }
    
    public hideModal() {
        (this.$refs['my-modal'] as any).hide();
      }


}
</script>
<style lang="scss" src="./Client.scss" scoped></style>