package cn.edu.sdu.sdudoc.service;

import com.alibaba.fastjson.JSONArray;
import org.apache.solr.client.solrj.SolrServerException;

import java.io.IOException;

public interface SolrService {
    JSONArray queryHead(String corename,String field,String keyword) throws SolrServerException, IOException;
}
